import { getState } from '../state';

const { document } = window;

const loadMaterialCheckboxEvents = () => {
  const listItems = document.querySelectorAll('#MaterialCheckboxListItem');
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      const newState = getState();
    });
  });
};

export default loadMaterialCheckboxEvents;
