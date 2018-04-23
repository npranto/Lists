const { localStorage } = window;
const KEY = '__LIST__';

export const getState = () => {
  const listOnLocalStorage = localStorage.getItem(KEY);
  return listOnLocalStorage
    ? Object.assign({}, JSON.parse(listOnLocalStorage))
    : Object.assign(
        {},
        {
          categories: [
            {
              id: 1,
              category: 'Groceries'
            },
            {
              id: 1,
              category: 'Chores'
            },
            {
              id: 1,
              category: 'Homework'
            }
          ],
          list: {}
        }
      );
};

export const setState = newState => {
  localStorage.setItem(KEY, JSON.stringify(newState));
};
