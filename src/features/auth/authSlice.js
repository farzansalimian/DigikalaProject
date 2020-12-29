import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {AUTH_URL} from '../../constants/serverUrls';
import {getToken} from '../../utils/dataHelper/auth/authApiDataHelper';
import {showError} from '../errorHandling/errorHandlingSlice';
import {clearCategories} from '../categories/categoriesSlice';
import {clearSearch} from '../movies/moviesSlice';

const initialState = {
  username: null,
  password: null,
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const {username, password, token} = action.payload;
      state.username = username;
      state.password = password;
      state.token = token;
    },
    logoutSuccess: (state, action) => {
      state.username = null;
      state.token = null;
      state.isLoading = false;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
  },
});

const {
  loginSuccess,
  logoutSuccess,
  startLoading,
  endLoading,
} = authSlice.actions;

export const login = ({username, password} = {}) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const res = await axios.post(AUTH_URL, {username, password});
    dispatch(loginSuccess({username, password, token: getToken(res)}));
  } catch (e) {
    // Todo: implement user friendly message based on error
    dispatch(showError('Wrong user name or password!'));
  } finally {
    dispatch(endLoading());
  }
};

export const logout = () => (dispatch) => {
  try {
    dispatch(logoutSuccess());
    dispatch(clearCategories());
    dispatch(clearSearch());
  } catch (e) {
    // Todo: implement user friendly message based on error
    dispatch(showError('Something went wrong please try again later!'));
  }
};

export default authSlice.reducer;
