import ListItem from './../ListItem/ListItem';
import { mapRender } from './../../utils';
import './ListItems.css';

const ListItems = ({ listItems }) => `
	<div class="ListItems">
		${mapRender(
      listItems,
      item => `
					${ListItem({ item })}
				`
    )}
	</div>
`;

export default ListItems;
