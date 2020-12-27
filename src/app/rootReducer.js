import {combineReducers} from 'redux';
import authReducer from '../features/auth/authSlice';
import errorHandlingReducer from '../features/errorHandling/errorHandlingSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  errorHandling: errorHandlingReducer,
});

export default rootReducer;
