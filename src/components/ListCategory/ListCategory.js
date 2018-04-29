import ContextMenu from './../ContextMenu/ContextMenu';
import './ListCategory.css';

const ListCategory = ({ category, activeCategoryId }) => `
	<div 
		id="ListCategory" 
		data-category-id="${category.id}" 
		class="ListCategory ${category.id === activeCategoryId ? 'active' : ''}">
			<h3 class="category-name"> ${category.category} </h3>
			${ContextMenu({ category })}
	</div>
	
`;

export default ListCategory;
