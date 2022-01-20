import { BOOKS } from 'router/routeNames';

const configs = {
  VERSION: '0.0.1',
  initialRouteName: BOOKS,
  initialRouteParams: {},
  LOG_API: false,
  LOG_ANALYTICS: false,
  // API_DOMAIN: 'http://localhost:4000',
  API_DOMAIN: 'https://my.api.mockaroo.com',
  AUTH_ACCESS_TOKEN_KEY: 'AuthAccessToken',
  AUTH_REFRESH_TOKEN_KEY: 'AuthRefreshToken',
  PLAY_STORE_LINK: '',
  ITUNES_LINK: '',
  CONTACT_NUMBER: '',
  WHATSAPP_NUMBER: '',
  CONTACT_EMAIL: '',
  DOWNLOAD_URL: '',
  SEARCH_LIMIT: 5,
  BACK_INTERVAL: 3000,
};

export default configs;
