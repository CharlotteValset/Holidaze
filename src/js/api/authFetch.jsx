import { headers } from "./headers";

export const authFetch = (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: headers(Boolean(options.body)),
  });
};
