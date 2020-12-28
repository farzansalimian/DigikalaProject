import {combineReducers} from 'redux';
import authReducer from '../features/auth/authSlice';
import errorHandlingReducer from '../features/errorHandling/errorHandlingSlice';
import moviesReducer from '../features/movies/moviesSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  errorHandling: errorHandlingReducer,
  movies: moviesReducer,
  categories: categoriesReducer,
});

export default rootReducer;
