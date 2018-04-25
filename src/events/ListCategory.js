import { getState, setState, reloadDOMContent } from './../state';

const { document } = window;

const loadListCategoryEvents = () => {
  const newState = getState();

  const listCategoryElements = document.querySelectorAll('#ListCategory');
  console.log(listCategoryElements);
  listCategoryElements.forEach(elem => {
    elem.addEventListener('click', () => {
      newState.activeCategoryId = elem.dataset.categoryId;
      setState(newState, reloadDOMContent);
    });
  });
};

export default loadListCategoryEvents;
