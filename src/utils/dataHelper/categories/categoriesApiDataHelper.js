import get from 'lodash/get';

export const getCategoriesResult = (res) => get(res, 'data.results', []);
export const getCategoriesNextUrl = (state) => get(state, 'data.next');
