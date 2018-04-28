import { getUniqueId } from './../utils';

class ListCategory {
	constructor(newCategory) {
		this.id = getUniqueId('category');
		this.category = newCategory;
	}
}

export default ListCategory;
