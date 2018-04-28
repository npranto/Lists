import updateCategoryIdOnClick from './updateActiveCategoryIdOnClick';
import handleNewItemInputOnChange from './handleNewItemInputOnChange';
import addNewItemToCurrentCategory from './addNewItemToCurrentCategory';
import addNewCategory from './addNewCategory';
import toggleItemComplete from './toggleItemComplete';
import toggleDeleteIconOnItemHover from './toggleDeleteIconOnItemHover';
import deleteItemFromCurrentCategory from './deleteItemFromCurrentCategory';

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
			handleNewItemInputOnChange();
			addNewItemToCurrentCategory();
			addNewCategory();
			toggleItemComplete();
			toggleDeleteIconOnItemHover();
			deleteItemFromCurrentCategory();
			resolve(true);
		} catch (error) {
			console.error(error);
			reject(false, error);
		}
	});
