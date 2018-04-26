import { getState, setState, reloadDOMContent } from './../state';
import { ListItemObject } from './../classes';

const { document } = window;

const addNewItemToCurrentCategory = () => {
  const newItemFormElem = document.querySelector(
    '.AddListItem .add-list-item-form'
  );
  if (newItemFormElem) {
    newItemFormElem.addEventListener('submit', () => {
      const newState = getState();
      if (newState.newItem && newState.newItem.length > 0) {
        newState.list[newState.activeCategoryId].push(
          new ListItemObject(newState.newItem)
        );
      }
      setState(newState, reloadDOMContent);
    });
  }
};

export default addNewItemToCurrentCategory;
