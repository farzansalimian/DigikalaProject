import get from 'lodash/get';
import {ERROR_HANDLING} from '../../../constants/reducerNames';

export const getStateErrorMessage = (state) =>
  get(state, `${ERROR_HANDLING}.errorMessage`, null);
