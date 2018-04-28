import { getUniqueId } from './../utils';

class ListItem {
	constructor(newItem) {
		this.id = getUniqueId('item');
		this.item = newItem;
		this.complete = false;
	}
}

export default ListItem;
