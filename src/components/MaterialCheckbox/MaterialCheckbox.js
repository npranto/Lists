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
				<span class="item ${item.complete ? 'cross-off' : ''}"> ${item.item} </span>
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
