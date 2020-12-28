import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#7CC4FA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  spinner: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});

const Button = memo((props) => {
  const {text, onPress, disabled, textStyle, buttonStyle, isLoading} = props;

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={'#FAF9F7'}
      disabled={disabled}>
      <View style={styles.row}>
        <View
          opacity={disabled ? 0.5 : 1}
          style={{...styles.container, ...buttonStyle}}>
          <Text style={{...styles.text, ...textStyle}}>{text}</Text>
        </View>

        {isLoading && (
          <View style={styles.spinner}>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        )}
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
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  textStyle: {},
  buttonStyle: {},
};

export default Button;
