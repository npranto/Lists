import { getState, setState } from './../state';

const setActiveCategoryId = () => {
  const newState = getState();
  if (newState.categories.length > 0) {
    newState.activeCategoryId = newState.categories[0].id;
    setState(newState);
    console.log(getState());
  }
};

export default setActiveCategoryId;
