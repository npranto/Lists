import swal from 'sweetalert';
import { getState, setState, reloadDOMContent } from './../state';

const { document } = window;

const askForConfirmation = () =>
  swal({
    title: 'Are you sure?',
    text: 'Seriously, no joke, we will delete it!',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  });

const deleteItemFromCurrentCategory = () => {
  const itemElems = document.querySelectorAll('.MaterialCheckbox span .delete');
  if (itemElems) {
    itemElems.forEach(elem => {
      elem.addEventListener('click', () => {
        askForConfirmation().then(willDelete => {
          if (willDelete) {
            const newState = getState();
            newState.list[newState.activeCategoryId] = newState.list[
              newState.activeCategoryId
            ].filter(item => item.id !== elem.dataset.deleteItemId);
            setState(newState, reloadDOMContent);
          }
        });
      });
    });
  }
};

export default deleteItemFromCurrentCategory;
