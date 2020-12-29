import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput} from 'react-native';

const getStyles = (isInValid) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 21,
      marginRight: 21,
      borderColor: isInValid ? 'red' : '#7B8794',
      borderWidth: 1,
      borderRadius: 32,
      backgroundColor: '#FAF9F7',
    },
    textInput: {
      fontSize: 16,
      color: '#1F2933',
      padding: 16,
      flex: 1,
      minHeight: 32,
    },
  });

function Input(props) {
  const {
    onChangeText,
    value,
    placeholder,
    isInValid,
    containerStyle,
    textStyle,
    autoFocus,
  } = props;
  const styles = getStyles(isInValid);

  return (
    <View style={containerStyle || styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={textStyle || styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={'#7B8794'}
        autoFocus={autoFocus}
      />
    </View>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  isInValid: PropTypes.bool,
  containerStyle: PropTypes.instanceOf(Object),
  textStyle: PropTypes.instanceOf(Object),
  autoFocus: PropTypes.bool,
};

Input.defaultProps = {
  autoFocus: false,
  value: null,
  isInValid: false,
  placeholder: null,
  containerStyle: null,
  textStyle: null,
};

export default memo(Input);
