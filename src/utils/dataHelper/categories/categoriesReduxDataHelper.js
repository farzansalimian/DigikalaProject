import get from 'lodash/get';

export const getStateCategories = (state) => get(state, 'categories.items', []);
export const getStateCategoriesIsLoading = (state) =>
  get(state, 'categories.isLoading');
export const getStateCategoriesNextUrl = (state) =>
  get(state, 'categories.nextUrl');
