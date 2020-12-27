import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {AUTH_URL} from '../../constants/serverUrls';
import {getToken} from '../../utils/dataHelper/authApiDataHelper';
import {showError} from '../errorHandling/errorHandlingSlice';

const initialState = {
  username: null,
  password: null,
  token: null,
  isLoading: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const {username, password, token} = action.payload;
      state.username = username;
      state.password = password;
      state.token = token;
      state.errorMessage = null;
    },
    logoutSuccess: (state, action) => {
      state.username = null;
      state.token = null;
      state.isLoading = false;
    },
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    endLoading: (state, action) => {
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
    dispatch(showError('Something went wrong please try again later!'));
  } finally {
    dispatch(endLoading());
  }
};

export const logout = () => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error('error', e.message);
  }
};

export default authSlice.reducer;
