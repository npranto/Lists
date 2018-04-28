import ListCategory from './../ListCategory/ListCategory';
import { getState } from './../../state';
import { mapRender } from './../../utils';
import './ListCategories.css';

const ListCategories = () => {
	const state = getState();
	return mapRender(
		state.categories,
		category =>
			`${ListCategory({ category, activeCategoryId: state.activeCategoryId })}`
	);
};

export default ListCategories;
