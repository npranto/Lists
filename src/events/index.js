import loadAddListCategoryEvents from './AddListCategory';
import loadAddListItemEvents from './AddListItem';
import setActiveCategoryIdEvent from './setActiveCategoryId';

export const setActiveCategoryId = setActiveCategoryIdEvent;

export const loadEventsBeforeDOMRender = () =>
  new Promise((resolve, reject) => {
    try {
      resolve(true);
    } catch (error) {
      console.error(error);
      reject(false, error);
    }
  });

export const loadEventsAfterDOMRender = () =>
  new Promise((resolve, reject) => {
    try {
      loadAddListCategoryEvents();
      loadAddListItemEvents();
      resolve(true);
    } catch (error) {
      console.error(error);
      reject(false, error);
    }
  });
