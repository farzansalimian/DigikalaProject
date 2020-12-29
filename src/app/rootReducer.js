import {combineReducers} from 'redux';
import authReducer from '../features/auth/authSlice';
import errorHandlingReducer from '../features/errorHandling/errorHandlingSlice';
import moviesReducer from '../features/movies/moviesSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import {
  AUTH,
  CATEGORIES,
  ERROR_HANDLING,
  MOVIES,
} from '../constants/reducerNames';

const rootReducer = combineReducers({
  [AUTH]: authReducer,
  [ERROR_HANDLING]: errorHandlingReducer,
  [MOVIES]: moviesReducer,
  [CATEGORIES]: categoriesReducer,
});

export default rootReducer;
