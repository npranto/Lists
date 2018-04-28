import { render, logger } from './utils';
import { loadEventsBeforeDOMRender, loadEventsAfterDOMRender } from './events';
import { getState } from './state';
import App from './components/App';
import './index.css';

window.addEventListener('load', () => {
	logger('STATE STATUS...', getState());
	loadEventsBeforeDOMRender()
		.then((eventsLoadedBeforeDOMRender, errorInLoadEventsBeforeDOMRender) => {
			if (eventsLoadedBeforeDOMRender) {
				render('Lists', App)
					.then((rendered, errorInRender) => {
						if (rendered) {
							loadEventsAfterDOMRender()
								.then((eventsLoadedAfterDOMRender, errorInLoadEventsAfterDOMRender) => {
									if (eventsLoadedAfterDOMRender) {
										// DONE!
									}
									if (errorInLoadEventsAfterDOMRender) {
										console.error(errorInLoadEventsAfterDOMRender);
									}
								});
						}
						if (errorInRender) {
							console.error(errorInRender);
						}
					});
			}
			if (errorInLoadEventsBeforeDOMRender) {
				console.error(errorInLoadEventsBeforeDOMRender);
			}
		});
});
