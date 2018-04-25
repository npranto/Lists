import MaterialCheckbox from './../MaterialCheckbox/MaterialCheckbox';
import './ListItem.css';

const ListItem = ({ item }) => `
	<div class="ListItem">
		${MaterialCheckbox({ item })}
	</div>
`;

export default ListItem;
