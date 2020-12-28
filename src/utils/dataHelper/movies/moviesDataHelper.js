import get from 'lodash/get';

export const getMovieTitle = (movie) => get(movie, 'title', null);
export const getMovieId = (movie) => get(movie, 'id', null);
export const getMovieDateOfRelease = (movie) =>
  get(movie, 'date_of_release', null);
export const getMovieRating = (movie) => get(movie, 'rating', null);
export const getMovieTags = (movie) => get(movie, 'tags', []);
export const getMovieDirector = (movie) => get(movie, 'director', null);
export const getMovieCountry = (movie) => get(movie, 'country', null);
export const getMovieCrew = (movie) => get(movie, 'crew', []);
export const getMovieLanguage = (movie) => get(movie, 'language', null);
export const getMovieCast = (movie) => get(movie, 'cast', []);
