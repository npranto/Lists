const { localStorage } = window;
const KEY = '__LIST__';

export const getState = () => {
  const listOnLocalStorage = localStorage.getItem(KEY);
  return listOnLocalStorage
    ? Object.assign({}, JSON.parse(listOnLocalStorage))
    : Object.assign({}, { categories: [], list: {} });
};

export const setState = newState => {
  localStorage.setItem(KEY, JSON.stringify(newState));
};
