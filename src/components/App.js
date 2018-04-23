import {render} from './../utils';

import Header from './Header/Header';
import './App.css';

const App = (props) => {
    return `
        <div class="App" id="App">
            ${Header({title: 'Lists'})}
        </div>
    `
}

export default App;