import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {MOVIE_URL} from '../../constants/serverUrls';
import {
  getMoviesNextUrl,
  getMoviesResult,
} from '../../utils/dataHelper/movies/moviesApiDataHelper';
import {getStateMoviesNextUrl} from '../../utils/dataHelper/movies/moviesReduxDataHelper';
import {showError} from '../errorHandling/errorHandlingSlice';

const initialState = {
  items: [],
  titleSearchTerm: null,
  isLoading: false,
  nextUrl: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    searchSuccess: (state, action) => {
      const {items, titleSearchTerm, nextUrl} = action.payload;
      state.items = [...state.items, ...items];
      state.titleSearchTerm = titleSearchTerm || state.titleSearchTerm;
      state.nextUrl = nextUrl;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    clearSearch: () => initialState,
  },
});

export const {
  searchSuccess,
  startLoading,
  endLoading,
  clearSearch,
} = moviesSlice.actions;

export const searchMovies = ({titleSearchTerm, categoryName} = {}) => async (
  dispatch,
) => {
  try {
    dispatch(startLoading());
    const res = await axios.get(MOVIE_URL, {
      params: {
        search: titleSearchTerm,
        limit: 40,
        tags: categoryName,
      },
    });
    dispatch(
      searchSuccess({
        titleSearchTerm,
        items: getMoviesResult(res),
        nextUrl: getMoviesNextUrl(res),
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
export const loadMoreMovies = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const nextUrl = getStateMoviesNextUrl(state);
    dispatch(startLoading());
    const res = await axios.get(nextUrl, {});
    dispatch(
      searchSuccess({
        items: getMoviesResult(res),
        nextUrl: getMoviesNextUrl(res),
      }),
    );
  } catch (e) {
    // Todo: implement user friendly message based on error
    dispatch(showError('Something went wrong please try again later!'));
  } finally {
    dispatch(endLoading());
  }
};
export default moviesSlice.reducer;
