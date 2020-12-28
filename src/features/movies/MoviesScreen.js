import React, {memo, useCallback} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Input from '../../components/Input';
import useMovieSearch from './useMoveSearch';
import List from '../../components/List';
import Movie from '../../components/Movie';
import PropTypes from 'prop-types';
import {getCategoryNameParam} from '../../utils/dataHelper/navigationDataHelper';
import Chip from '../../components/Chip';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#E6F6FF',
    paddingVertical: 20,
  },
  list: {
    flex: 1,
    marginTop: 16,
  },
  categoryChip: {
    marginTop: 16,
    marginHorizontal: 20,
    backgroundColor: '#FAD7A0',
  },
});
const MoviesScreen = memo((props) => {
  const {route} = props;
  const categoryName = getCategoryNameParam(route);
  const {
    titleSearchTerm,
    onTitleSearchTermChange,
    movies,
    isLoading,
    onEndReached,
  } = useMovieSearch({categoryName});

  const rowRenderer = useCallback((type, data, index) => {
    return <Movie data={data} />;
  }, []);
  return (
    <View style={styles.container}>
      <Input
        onChangeText={onTitleSearchTermChange}
        value={titleSearchTerm}
        placeholder={'Search move title'}
      />

      <Chip text={categoryName} containerStyle={styles.categoryChip} />

      <View style={styles.list}>
        <List
          canChangeSize
          forceNonDeterministicRendering
          items={movies}
          rowRenderer={rowRenderer}
          isLoading={isLoading}
          onEndReached={onEndReached}
        />
      </View>
    </View>
  );
});

MoviesScreen.defaultProps = {};
MoviesScreen.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired,
};
export default MoviesScreen;
