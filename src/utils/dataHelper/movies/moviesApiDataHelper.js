import get from 'lodash/get';

export const getMoviesResult = (res) => get(res, 'data.results', []);
export const getMoviesNextUrl = (state) => get(state, 'data.next');
