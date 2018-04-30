import ListsLogo from './../../assets/favicons/apple-icon-72x72.png';
import './Header.css';

const Header = () => `
	<div class="Header">
		<div class="lists-logo">
			<img src=${ListsLogo} alt="List Logo" />
		</div>
		<h1 class="faded _700"> Lists </h1>
	</div>
`;

export default Header;
