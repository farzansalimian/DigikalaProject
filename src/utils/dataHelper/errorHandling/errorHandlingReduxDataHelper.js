import get from 'lodash/get';

export const getStateErrorMessage = (state) =>
  get(state, 'errorHandling.errorMessage', null);
