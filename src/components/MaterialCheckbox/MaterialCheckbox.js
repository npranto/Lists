import './MaterialCheckbox.css';

const MaterialCheckbox = ({ item }) => `
	<div class="MaterialCheckbox">
		<label 
			id="MaterialCheckboxListItem" 
			data-item-id="${item.id}" 
			class="MaterialCheckboxLabel label--checkbox">
			<input 
				type="checkbox" 
				class="checkbox" 
				${item.complete ? 'checked' : ''} />	
					${item.item}
		</label>
		<span> 
			<i 
				class="far fa-trash-alt delete" 
				data-delete-item-id="${item.id}">
			</i> 
		</span>
	</div>
`;

export default MaterialCheckbox;
