export const load = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
