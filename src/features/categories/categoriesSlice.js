import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {CATEGORY_URL} from '../../constants/serverUrls';
import {getStateMoviesNextUrl} from '../../utils/dataHelper/movies/moviesReduxDataHelper';
import {
  getCategoriesNextUrl,
  getCategoriesResult,
} from '../../utils/dataHelper/categories/categoriesApiDataHelper';
import {showError} from '../errorHandling/errorHandlingSlice';

const initialState = {
  items: [],
  isLoading: false,
  nextUrl: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchSuccess: (state, action) => {
      const {items, nextUrl} = action.payload;
      state.items = [...state.items, ...items];
      state.nextUrl = nextUrl;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    clearCategories: () => initialState,
  },
});

export const {
  fetchSuccess,
  startLoading,
  endLoading,
  clearCategories,
} = categoriesSlice.actions;

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const res = await axios.get(CATEGORY_URL, {
      params: {
        limit: 40,
      },
    });
    dispatch(
      fetchSuccess({
        items: getCategoriesResult(res),
        nextUrl: getCategoriesNextUrl(res),
      }),
    );
  } catch (e) {
    // Todo: implement user friendly message based on error
    dispatch(showError('Something went wrong please try again later!'));
  } finally {
    dispatch(endLoading());
  }
};

// Load more data based on next url that is given from server
export const loadMoreCategories = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const nextUrl = getStateMoviesNextUrl(state);
    dispatch(startLoading());
    const res = await axios.get(nextUrl, {});
    dispatch(
      fetchSuccess({
        items: getCategoriesResult(res),
        nextUrl: getCategoriesNextUrl(res),
      }),
    );
  } catch (e) {
    // Todo: implement user friendly message based on error
    dispatch(showError('Something went wrong please try again later!'));
  } finally {
    dispatch(endLoading());
  }
};
export default categoriesSlice.reducer;
