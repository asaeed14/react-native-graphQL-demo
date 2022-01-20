import configs from 'configs';
import LocalStorage from 'platform/LocalStorage';
import { Log } from 'platform/Logger';
import qs from 'query-string';

const defaultHeaders: {
  'Content-Type': string;
  Authorization?: string;
} = {
  'Content-Type': 'application/json',
};

export function setAuthenticationTokens({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  if (accessToken && refreshToken) {
    LocalStorage.setItem(configs.AUTH_ACCESS_TOKEN_KEY, accessToken);
    LocalStorage.setItem(configs.AUTH_REFRESH_TOKEN_KEY, refreshToken);

    setAuthenticationHeader({ token: accessToken });
  }
}

export function removeAuthenticationTokens() {
  LocalStorage.removeItem(configs.AUTH_ACCESS_TOKEN_KEY);
  LocalStorage.removeItem(configs.AUTH_REFRESH_TOKEN_KEY);

  removeAuthenticationHeader();
}

export function setAuthenticationHeader({ token }: { token: string }) {
  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }
}

export function removeAuthenticationHeader() {
  Log('Removing Auth Token');
  delete defaultHeaders.Authorization;
}

export async function updateToken() {
  const refreshToken = await LocalStorage.getItem(
    configs.AUTH_REFRESH_TOKEN_KEY,
  );

  const body = {
    refreshToken,
  };
  const props = {
    method: 'POST',
    body: JSON.stringify(body),
  };
  const fetchUrl = `${configs.API_DOMAIN}/v1/user/token/`;

  const resp = await fetch(fetchUrl, props);
  if (resp.status >= 400) {
    const data = await resp.json();
    if (data.access_token) {
      setAuthenticationTokens({
        accessToken: data.access_token,
        refreshToken,
      });
    }
    return true;
  }
  return resp;
}

export async function reFetch({ fetchUrl, params }) {
  const resp = await fetch(fetchUrl, params);
  return resp;
}

export async function reTry({ fetchUrl, params, args }) {
  const resp = await updateToken();
  if (resp) {
    const data = await reFetch({ fetchUrl, params });
    if (data.status >= 400) {
      if (args.parseError) {
        const error = await data.json();
        // eslint-disable-next-line no-throw-literal
        throw {
          status: data.status,
          error,
        };
      }
      throw data;
    }

    if (args.parsing === 'json') {
      return data.json();
    }

    return data;
  }
  return resp;
}

interface IAPIArgs {
  url: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  body?: any;
  headers?: any;
  params?: any;
  bodyParsing?: string;
  parseError?: boolean;
  noAuth?: boolean;
  [key: string]: any;
}

export default async function api(args: IAPIArgs, parsing: string = 'json') {
  const {
    url,
    method = 'GET',
    body = {},
    headers = {},
    params = null,
    baseDomain = configs.API_DOMAIN,
    bodyParsing = 'json',
    parseError = true,
    noAuth = false,
    ...extraProps
  } = args;

  const props = {
    method,
    headers: { ...defaultHeaders, ...headers },
    ...extraProps,
  };

  let fetchUrl = url;
  fetchUrl = `${baseDomain}${url}`;

  if (method !== 'GET') {
    if (bodyParsing === 'json') {
      // @ts-ignore
      props.body = JSON.stringify(body);
    } else {
      // @ts-ignore
      props.body = body;
    }
  }

  if (params) {
    fetchUrl = `${fetchUrl}?${qs.stringify(params, {
      arrayFormat: 'bracket',
    })}`;
  }

  if (noAuth) {
    delete props.headers.Authorization;
    delete props.headers.authorization;
  }
  Log({ fetchUrl, props });
  const data = await fetch(fetchUrl, props);

  // ******* Start Token Expire Case *******
  if (data.status === 401) {
    const response: any = reTry({ fetchUrl, params: props, args });
    return response;
  }
  // ******* End Token Expire Case *******

  if (data.status >= 400) {
    if (parseError) {
      const error = await data.json();
      // eslint-disable-next-line no-throw-literal
      throw {
        status: data.status,
        error,
      };
    }
    throw data;
  }

  if (parsing === 'json') {
    return data.json();
  }

  return data;
}
