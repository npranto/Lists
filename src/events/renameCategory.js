import swal from 'sweetalert';
import { getState, setState, reloadDOMContent } from './../state';

const renameCategory = () => {
	const renameCategoryButtons = document.querySelectorAll('.ContextMenu .rename');
	if (renameCategoryButtons) {
		renameCategoryButtons.forEach((button) => {
			button.addEventListener('click', (e) => {
				e.stopPropagation();
				e.preventDefault();
				swal({
					title: 'Rename Category',
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
							text: 'Rename',
							value: true,
							visible: true,
							className: 'update-btn',
							closeModal: true
						}
					}
				}).then((value) => {
					if (value) {
						const newState = getState();
						newState.categories = newState.categories.map((category) => {
							if (category.id === button.dataset.categoryId) {
								return { ...category, category: value };
							}
							return category;
						});
						setState(newState, reloadDOMContent);
					}
				});
			});
		});
	}
};

export default renameCategory;
