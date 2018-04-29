import { getState, setState, reloadDOMContent } from './../state';
import { askForConfirmation } from './../utils';

const deleteCategory = () => {
	const deleteCategoryButtons = document.querySelectorAll('.ContextMenu .delete');
	if (deleteCategoryButtons) {
		deleteCategoryButtons.forEach((button) => {
			button.addEventListener('click', (e) => {
				e.stopPropagation();
				e.preventDefault();
				askForConfirmation()
					.then((willDelete) => {
						if (willDelete) {
							const newState = getState();
							delete newState.list[button.dataset.categoryId];
							newState.categories = newState.categories
								.filter(category => category.id !== button.dataset.categoryId);
							if (!newState.list[newState.activeCategoryId]) {
								newState.activeCategoryId = ((newState.categories.length > 0)
									? newState.categories[0].id
									: null
								);
							}
							setState(newState, reloadDOMContent);
						}
					});
			});
		});
	}
};

export default deleteCategory;
