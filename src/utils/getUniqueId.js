import uniqid from 'uniqid';

const getUniqueId = prefix => uniqid(`${prefix}-`) || null;

export default getUniqueId;
