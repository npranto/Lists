import { getState, setState } from './../state';

const { document } = window;

const handleNewItemInputOnChange = () => {
  const newItemInputElem = document.querySelector(
    '.AddListItem .add-list-item-form #add-list-item-input'
  );
  if (newItemInputElem) {
    newItemInputElem.addEventListener('keyup', e => {
      const newState = getState();
      newState.newItem = e.target.value;
      setState(newState);
    });
  }
};

export default handleNewItemInputOnChange;
