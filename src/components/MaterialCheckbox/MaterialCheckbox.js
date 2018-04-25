import './MaterialCheckbox.css';

const MaterialCheckbox = ({ item }) => `
	<label 
		id="MaterialCheckboxListItem" 
		data-item-id="${item.id}" 
		class="MaterialCheckbox label--checkbox">
		<input 
			type="checkbox" 
			class="checkbox" 
			${item.complete ? 'checked' : ''} />	
				${item.item}
	</label>
`;

// NOTE: !!item.complete is the same as item.complete ? true : false

export default MaterialCheckbox;
