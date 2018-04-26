const { localStorage, location } = window;
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
              id: '1',
              category: 'Groceries'
            },
            {
              id: '2',
              category: 'Chores'
            },
            {
              id: '3',
              category: 'Homework'
            }
          ],
          list: {
            '1': [
              {
                id: '1',
                item: 'Buy milk',
                complete: false
              },
              {
                id: '2',
                item: 'Get broccoli',
                complete: true
              },
              {
                id: '3',
                item: 'Get 3 Sprites',
                complete: false
              }
            ]
          },
          newItem: '',
          activeCategoryId: null
        }
      );
};

export const setState = (newState, cb) => {
  localStorage.setItem(KEY, JSON.stringify(newState));
  console.log('STATE UPDATE...\n', getState());
  if (cb) {
    cb();
  }
};

export const reloadDOMContent = () => {
  location.reload(); // TODO: Brute force! Find a better way to dynamically update DOM element
};
