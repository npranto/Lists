import { getState, setState, reloadDOMContent } from './../state';
import { askForConfirmation } from './../utils';

const deleteItemFromCurrentCategory = () => {
	const deleteItemIconElems = document.querySelectorAll('.MaterialCheckbox span .delete');
	if (deleteItemIconElems) {
		deleteItemIconElems.forEach((elem) => {
			elem.addEventListener('click', (e) => {
				e.preventDefault();
				askForConfirmation()
					.then((willDelete) => {
						if (willDelete) {
							const newState = getState();
							newState.list[newState.activeCategoryId] =
								newState.list[newState.activeCategoryId]
									.filter(item => item.id !== elem.dataset.deleteItemId);
							setState(newState, reloadDOMContent);
						}
					});
			});
		});
	}
};

export default deleteItemFromCurrentCategory;
