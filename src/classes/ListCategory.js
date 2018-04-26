import { getUniqueId } from './../utils';

class ListCategory {
  constructor(newCategory) {
    this.id = getUniqueId('item');
    this.category = newCategory;
  }
}

export default ListCategory;
