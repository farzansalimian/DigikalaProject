import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearCategories,
  fetchCategories,
  loadMoreCategories,
} from './categoriesSlice';
import {
  getStateCategories,
  getStateCategoriesIsLoading,
} from '../../utils/dataHelper/categories/categoriesReduxDataHelper';
import {useIsFocused} from '@react-navigation/native';

function useCategories({}) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => getStateCategories(state));
  const isLoading = useSelector((state) => getStateCategoriesIsLoading(state));

  const onEndReached = useCallback(() => {
    dispatch(loadMoreCategories());
  }, []);

  const isFocused = useIsFocused();

  useEffect(() => {
    // Clear list on screen blur
    if (!isFocused) {
      dispatch(clearCategories());
    } else {
      // Fetch list on mount
      dispatch(fetchCategories());
    }
  }, [isFocused]);

  return {
    categories,
    isLoading,
    onEndReached,
  };
}

export default useCategories;
