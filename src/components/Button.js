import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#7CC4FA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const Button = memo((props) => {
  const {text, onPress, disabled, textStyle, buttonStyle} = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={'#FAF9F7'}
      disabled={disabled}>
      <View
        opacity={disabled ? 0.5 : 1}
        style={buttonStyle || styles.container}>
        <Text style={textStyle || styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
});

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.instanceOf(Object),
  textStyle: PropTypes.instanceOf(Object),
};

Button.defaultProps = {
  disabled: false,
  textStyle: null,
  buttonStyle: null,
};

export default Button;
