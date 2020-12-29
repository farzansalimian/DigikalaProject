import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const getStyles = (extraStyles) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#AEB6BF',
      height: 1,
      ...extraStyles,
    },
  });

function Divider(props) {
  const {marginBottom, marginTop, isHidden, marginLeft, marginRight} = props;
  const styles = getStyles({
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
  });

  if (isHidden) {
    return <></>;
  }
  return <View style={styles.container} />;
}

Divider.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  isHidden: false,
};

Divider.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  isHidden: PropTypes.bool,
};

export default memo(Divider);
