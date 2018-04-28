import { render } from './utils';
import { loadEventsBeforeDOMRender, loadEventsAfterDOMRender } from './events';
import { getState } from './state';
import App from './components/App';
import './index.css';

window.addEventListener('load', () => {
	console.log('STATE STATUS...\n', getState());
	loadEventsBeforeDOMRender().then(
    (eventsLoadedBeforeDOMRender, errorInLoadEventsBeforeDOMRender) => {
      if (eventsLoadedBeforeDOMRender) {
        render('Lists', App).then((rendered, errorInRender) => {
          if (rendered) {
            loadEventsAfterDOMRender().then(
              (eventsLoadedAfterDOMRender, errorInLoadEventsAfterDOMRender) => {
                if (eventsLoadedAfterDOMRender) {
                  // DO NOTHING!
                }
                if (errorInLoadEventsAfterDOMRender) {
                  console.error(errorInLoadEventsAfterDOMRender);
                }
              }
            );
          }
          if (errorInRender) {
            console.error(errorInRender);
          }
        });
      }
      if (errorInLoadEventsBeforeDOMRender) {
        console.error(errorInLoadEventsBeforeDOMRender);
      }
    }
  );
});
