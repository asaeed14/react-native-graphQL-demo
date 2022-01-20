/* eslint-disable no-console */
export function Log(...args) {
  if (!__DEV__) {
    return;
  }
  console.log(...args);
}

export function Warn(...args) {
  if (!__DEV__) {
    return;
  }
  console.warn(...args);
}

export function Error(...args) {
  if (!__DEV__) {
    return;
  }
  console.warn(...args);
}

/* eslint-enable no-console */
