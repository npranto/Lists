import './ListCategory.css';

const ListCategory = ({ category, activeCategoryId }) => `
		<div 
			id="ListCategory" 
			data-category-id="${category.id}" 
			class="ListCategory ${category.id === activeCategoryId ? 'active' : ''}">
				<h3 class="category-name"> ${category.category} </h3>
		</div>
`;

export default ListCategory;
