import { getState, setState, reloadDOMContent } from './../state';
import { ListItemObject } from './../classes';

const { document } = window;

const loadAddListCategoryEvents = () => {
  document
    .querySelector('.AddListItem .add-list-item-form #add-list-item-input')
    .addEventListener('keyup', e => {
      const newState = getState();
      if (!newState.newItem) {
        newState.newItem = '';
      }
      newState.newItem = e.target.value;
      setState(newState);
    });
  document
    .querySelector('.AddListItem .add-list-item-form')
    .addEventListener('submit', () => {
      const newState = getState();
      if (newState.newItem) {
        newState.list[newState.activeCategoryId].push(
          new ListItemObject(newState.newItem)
        );
      }
      setState(newState, reloadDOMContent);
    });
};

export default loadAddListCategoryEvents;
