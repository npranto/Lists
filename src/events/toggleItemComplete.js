import { getState, setState, reloadDOMContent } from './../state';

const { document } = window;

const toggleItemComplete = () => {
  const itemElems = document.querySelectorAll('#MaterialCheckboxListItem');
  if (itemElems) {
    itemElems.forEach(elem => {
      elem.addEventListener('click', () => {
        const newState = getState();
        newState.list[newState.activeCategoryId] = newState.list[
          newState.activeCategoryId
        ].map(
          item =>
            item.id === elem.dataset.itemId
              ? { ...item, complete: !item.complete }
              : item
        );
        setState(newState, reloadDOMContent);
      });
    });
  }
};

export default toggleItemComplete;
