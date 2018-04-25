import { render } from './utils';
import {
  loadEventsBeforeDOMRender,
  loadEventsAfterDOMRender,
  setActiveCategoryId
} from './events';

import App from './components/App';
import './index.css';

window.addEventListener('load', () => {
  setActiveCategoryId();

  loadEventsBeforeDOMRender().then(
    (eventsLoadedBeforeDOMRender, errorInLoadEventsBeforeDOMRender) => {
      if (eventsLoadedBeforeDOMRender) {
        render('Lists', App).then((rendered, errorInRender) => {
          if (rendered) {
            loadEventsAfterDOMRender().then(
              (eventsLoadedAfterDOMRender, errorInLoadEventsAfterDOMRender) => {
                if (eventsLoadedAfterDOMRender) {
                  console.log('COOL!');
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
