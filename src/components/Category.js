import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import Divider from './Divider';
import {getCategoryName} from '../utils/dataHelper/categories/categoriesDataHelper';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../constants/screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
    padding: 16,
  },
  text: {
    flexShrink: 1,
    color: '#283747',
    fontSize: 16,
  },
});

function Category(props) {
  const {data} = props;
  const navigation = useNavigation();
  const categoryName = getCategoryName(data);

  const onPress = () => {
    navigation.navigate(SCREENS.MOVIES, {categoryName: categoryName});
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.touchable}
      underlayColor={'#FAF9F7'}>
      <View style={styles.container}>
        <Text style={styles.text}>{categoryName}</Text>
        <Divider marginTop={8} />
      </View>
    </TouchableHighlight>
  );
}

Category.defaultProps = {};
Category.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default memo(Category);
