import get from 'lodash/get';

export const getToken = (res) => get(res, 'data.token', null);
