import get from 'lodash/get';
import {MOVIES} from '../../../constants/reducerNames';

export const getStateMovies = (state) => get(state, `${MOVIES}.items`, []);
export const getStateMoviesIsLoading = (state) =>
  get(state, `${MOVIES}.isLoading`);
export const getStateMoviesNextUrl = (state) => get(state, `${MOVIES}.nextUrl`);
