import swal from 'sweetalert';
import { ListCategoryObject } from '../classes';
import { getState, setState, reloadDOMContent } from './../state';
import { getUniqueId } from './../utils';

const addNewCategory = () => {
	const categoryButtonElem = document.querySelector('.AddListCategory .add-category-btn');
	if (categoryButtonElem) {
		categoryButtonElem.addEventListener('click', () => {
			swal({
				title: 'New Category',
				content: {
					element: 'input',
					attributes: {
						placeholder: 'i.e., Groceries',
						type: 'text'
					}
				},
				buttons: {
					cancel: {
						text: 'Cancel',
						value: null,
						visible: true,
						className: 'cancel-btn',
						closeModal: true
					},
					confirm: {
						text: 'Add',
						value: true,
						visible: true,
						className: 'confirm-btn',
						closeModal: true
					}
				}
			}).then((value) => {
				if (value) {
					const newState = getState();
					const newId = getUniqueId('category');
					if (newId) {
						const newCategory = new ListCategoryObject(value);
						newState.categories.unshift(newCategory);
						newState.activeCategoryId = newCategory.id;
						newState.list[newCategory.id] = [];
						setState(newState, reloadDOMContent);
					}
				}
			});
		});
	}
};

export default addNewCategory;
