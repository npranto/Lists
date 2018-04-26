const { document } = window;

const toggleDeleteIconOnItemHover = () => {
  const checkboxElems = document.querySelectorAll('.MaterialCheckbox');
  checkboxElems.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      elem.querySelector('span .delete').classList.add('delete-hover');
    });
    elem.addEventListener('mouseleave', () => {
      elem.querySelector('span .delete').classList.remove('delete-hover');
    });
  });
};

export default toggleDeleteIconOnItemHover;
