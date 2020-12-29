import React, {memo} from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  fullPage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    backgroundColor: '#E6F6FF',
  },
  row: {
    height: 32,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Loading(props) {
  const {isFullPage} = props;
  return (
    <View style={isFullPage ? styles.fullPage : styles.row}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
}

Loading.defaultProps = {
  isFullPage: false,
};
Loading.propTypes = {
  isFullPage: PropTypes.bool,
};

export default memo(Loading);
