import MaterialCheckbox from './../MaterialCheckbox/MaterialCheckbox';
import './ListItem.css';

const ListItem = ({ item }) =>
  `<div class="ListItem">
		${MaterialCheckbox({ item: item.item })}
	</div>`;

export default ListItem;
