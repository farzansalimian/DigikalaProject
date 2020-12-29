import get from 'lodash/get';

export const getCategoryName = (movie) => get(movie, 'name', null);
export const getCategoryId = (movie) => get(movie, 'id', null);
