import get from 'lodash/get';
import {AUTH} from '../../../constants/reducerNames';

export const getStateUsername = (state) => get(state, `${AUTH}.username`);
export const getStateAuthIsLoading = (state) => get(state, `${AUTH}.isLoading`);
