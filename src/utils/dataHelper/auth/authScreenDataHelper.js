import get from 'lodash/get';

export const getUsernameIsValid = (username) => get(username, 'isValid');
export const getUsernameValue = (username) => get(username, 'value');

export const getPasswordIsValid = (username) => get(username, 'isValid');
export const getPasswordValue = (username) => get(username, 'value');
