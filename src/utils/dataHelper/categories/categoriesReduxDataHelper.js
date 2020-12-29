import get from 'lodash/get';
import {CATEGORIES} from '../../../constants/reducerNames';

export const getStateCategories = (state) =>
  get(state, `${CATEGORIES}.items`, []);
export const getStateCategoriesIsLoading = (state) =>
  get(state, `${CATEGORIES}.isLoading`);
export const getStateCategoriesNextUrl = (state) =>
  get(state, `${CATEGORIES}.nextUrl`);
