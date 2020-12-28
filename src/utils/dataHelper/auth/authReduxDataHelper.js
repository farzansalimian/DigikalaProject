import get from 'lodash/get';

export const getStateUsername = (state) => get(state, 'auth.username');
export const getStateIsLoading = (state) => get(state, 'auth.isLoading');
