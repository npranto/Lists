import updateCategoryIdOnClick from './updateActiveCategoryIdOnClick';
import handleNewItemInputOnChange from './handleNewItemInputOnChange';
import addNewItemToCurrentCategory from './addNewItemToCurrentCategory';
import addNewCategory from './addNewCategory';

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
      updateCategoryIdOnClick();
      updateCategoryIdOnClick();
      handleNewItemInputOnChange();
      addNewItemToCurrentCategory();
      addNewCategory();
      resolve(true);
    } catch (error) {
      console.error(error);
      reject(false, error);
    }
  });
