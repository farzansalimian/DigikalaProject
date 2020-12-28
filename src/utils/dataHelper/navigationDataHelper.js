import get from 'lodash/get';

export const getCategoryNameParam = (route) =>
  get(route, 'params.categoryName');
