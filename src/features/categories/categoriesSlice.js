import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {CATEGORY_URL} from '../../constants/serverUrls';
import {getStateMoviesNextUrl} from '../../utils/dataHelper/movies/moviesReduxDataHelper';
import {
  getCategoriesNextUrl,
  getCategoriesResult,
} from '../../utils/dataHelper/categories/categoriesApiDataHelper';

const initialState = {
  items: [],
  isLoading: false,
  searchErrorMessage: null,
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
    fetchError: (state, action) => {
      state.searchErrorMessage = action.payload;
    },
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    endLoading: (state, action) => {
      state.isLoading = false;
    },
    clearCategories: (state, action) => {
      state.items = [];
      state.nextUrl = null;
    },
  },
});

export const {
  fetchSuccess,
  fetchError,
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
    dispatch(fetchError('Something went wrong please try again later!'));
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
    dispatch(fetchError('Something went wrong please try again later!'));
  } finally {
    dispatch(endLoading());
  }
};
export default categoriesSlice.reducer;
