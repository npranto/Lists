import AddListItem from './../AddListItem/AddListItem';
import ListItems from './../ListItems/ListItems';
import { getState } from './../../state';
import './List.css';

const List = () => {
  const { activeCategoryId, list } = getState();
  const listItems = list[activeCategoryId];
  console.log(listItems);
  return `
		<div class="List">
			${AddListItem()}
			${ListItems({ listItems })}
		</div>
	`;
};

export default List;
