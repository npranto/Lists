import Header from './Header/Header';
import AddListCategory from './AddListCategory/AddListCategory';
import ListCategories from './ListCategories/ListCategories';
import List from './List/List';
import './App.css';

const App = () => `
	<div class="App">
		${Header()}
		<div class="category">
			${AddListCategory()}
			${ListCategories()}
		</div>
		${List()}
	</div>
`;

export default App;
