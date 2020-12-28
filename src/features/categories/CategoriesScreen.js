import React, {memo, useCallback} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import List from '../../components/List';
import useCategories from './useCategories';
import Category from '../../components/Category';

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
});
const CategoriesScreen = memo(() => {
  const {categories, isLoading, onEndReached} = useCategories({});

  const rowRenderer = useCallback((type, data, index) => {
    return <Category data={data} />;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <List
          canChangeSize
          forceNonDeterministicRendering
          items={categories}
          rowRenderer={rowRenderer}
          isLoading={isLoading}
          onEndReached={onEndReached}
        />
      </View>
    </View>
  );
});

CategoriesScreen.defaultProps = {};
CategoriesScreen.propTypes = {};
export default CategoriesScreen;
