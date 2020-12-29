import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 16,
    paddingRight: 12,
    paddingLeft: 12,
    minHeight: 34,
    backgroundColor: '#E89797',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: '#27241D',
    flexShrink: 1,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
});

function Chip(props) {
  const {
    leftIcon,
    rightIcon,
    text,
    containerStyle,
    textStyle,
    leftIconStyle,
    rightIconStyle,
    isDim,
  } = props;

  if (!text) {
    return <></>;
  }
  return (
    <View
      style={{...styles.container, ...containerStyle}}
      opacity={isDim ? 0.5 : 1}>
      {leftIcon && (
        <View style={{...styles.leftIcon, ...leftIconStyle}}>{leftIcon}</View>
      )}

      <Text style={{...styles.text, ...textStyle}}>{text}</Text>

      {rightIcon && (
        <View style={{...styles.rightIcon, ...rightIconStyle}}>
          {rightIcon}
        </View>
      )}
    </View>
  );
}

Chip.defaultProps = {
  leftIcon: null,
  rightIcon: null,
  containerStyle: {},
  textStyle: {},
  leftIconStyle: {},
  rightIconStyle: {},
  isDim: false,
  prefix: null,
  prefixStyle: null,
  disableOnPress: false,
  useListStyle: false,
  text: null,
};

Chip.propTypes = {
  leftIcon: PropTypes.instanceOf(Object),
  rightIcon: PropTypes.instanceOf(Object),
  text: PropTypes.string,
  isDim: PropTypes.bool,
  containerStyle: PropTypes.instanceOf(Object),
  textStyle: PropTypes.instanceOf(Object),
  leftIconStyle: PropTypes.instanceOf(Object),
  rightIconStyle: PropTypes.instanceOf(Object),
};

export default memo(Chip);
