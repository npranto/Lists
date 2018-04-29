import './ContextMenu.css';

const ContextMenu = ({ category }) => `
	<div class="ContextMenu" data-category-name="${category.category}">
		<div class="context-menu-link rename" data-category-id="${category.id}">
			<span> <i class="fas fa-pencil-alt"></i> &nbsp;Rename </span>
		</div>
		<div class="context-menu-link delete" data-category-id="${category.id}">
			<span> <i class="far fa-trash-alt"></i> &nbsp;Delete </span>
		</div>
	</div>
`;

export default ContextMenu;
