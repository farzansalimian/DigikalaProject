import get from 'lodash/get';

export const getStateMovies = (state) => get(state, 'movies.items', []);
export const getStateMoviesIsLoading = (state) =>
  get(state, 'movies.isLoading');
export const getStateMoviesNextUrl = (state) => get(state, 'movies.nextUrl');
