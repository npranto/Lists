// app starter...
import {render} from './utils';
import {loadEvents} from './events';

import App from './components/App';
import './index.css';

render('Lists', App);
loadEvents();
