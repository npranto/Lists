import uniqid from 'uniqid';

const getUniqueId = prefix => {
  const id = uniqid(`${prefix}-`);
  return id || null;
};

export default getUniqueId;
