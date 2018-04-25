import './MaterialCheckbox.css';

const MaterialCheckbox = ({ item }) => `
	<label class="MaterialCheckbox label--checkbox">
		<input type="checkbox" class="checkbox">
			${item}
	</label>
`;

export default MaterialCheckbox;
