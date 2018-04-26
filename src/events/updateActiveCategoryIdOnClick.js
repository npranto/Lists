import { getState, setState, reloadDOMContent } from './../state';

const { document } = window;

const updateCategoryIdOnClick = () => {
  const listCategoryElements = document.querySelectorAll('#ListCategory');
  listCategoryElements.forEach(elem => {
    elem.addEventListener('click', () => {
      const newState = getState();
      newState.activeCategoryId = elem.dataset.categoryId;
      setState(newState, reloadDOMContent);
    });
  });
};

export default updateCategoryIdOnClick;
