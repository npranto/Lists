import { getState, setState, reloadDOMContent } from './../state';
import { ListItemObject } from './../classes';

const addNewItemToCurrentCategory = () => {
	const newItemFormElem = document.querySelector('.AddListItem .add-list-item-form');
	if (newItemFormElem) {
		newItemFormElem.addEventListener('submit', (e) => {
			e.preventDefault();
			const newState = getState();
			if (newState.newItem.length > 0) {
				newState.list[newState.activeCategoryId].push(new ListItemObject(newState.newItem));
				newState.newItem = '';
				setState(newState, reloadDOMContent);
			}
		});
	}
};

export default addNewItemToCurrentCategory;
