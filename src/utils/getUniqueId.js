import uniqid from 'uniqid';

const getUniqueId = prefix =>
  new Promise((resolve, reject) => {
    const id = uniqid(`${prefix}-`);
    return id ? resolve(id) : reject(null);
  });

export default getUniqueId;
