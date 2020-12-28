import {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchMovies, clearSearch, loadMoreMovies} from './moviesSlice';
import {
  getStateMoviesIsLoading,
  getStateMovies,
} from '../../utils/dataHelper/movies/moviesReduxDataHelper';
import {useIsFocused, useNavigation} from '@react-navigation/native';

function useMovieSearch({categoryName}) {
  const [titleSearchTerm, setTitleSearchTerm] = useState();
  const dispatch = useDispatch();
  const movies = useSelector((state) => getStateMovies(state));
  const isLoading = useSelector((state) => getStateMoviesIsLoading(state));
  const timeOut = useRef(0);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const onTitleSearchTermChange = useCallback((value) => {
    setTitleSearchTerm(value);
  }, []);

  const onEndReached = useCallback(() => {
    dispatch(loadMoreMovies());
  }, []);

  useEffect(() => {
    // If screen is not focus do not proceed
    if (!isFocused) {
      return;
    }
    // Load movies with a delay when user has stopped typing
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      // Clear list for better user experience
      dispatch(clearSearch());
      if (titleSearchTerm || categoryName) {
        dispatch(
          searchMovies({titleSearchTerm: titleSearchTerm, categoryName}),
        );
      }
    }, 100);
  }, [titleSearchTerm, categoryName, isFocused]);

  useEffect(() => {
    // Clear list on screen blur
    if (!isFocused) {
      navigation.setParams({params: null});
      dispatch(clearSearch());
    }
  }, [isFocused]);

  return {
    onTitleSearchTermChange,
    titleSearchTerm,
    movies,
    isLoading,
    onEndReached,
  };
}

export default useMovieSearch;
