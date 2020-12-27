import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Input from '../../components/Input';
import useLogin from './useLogin';
import {
  getPasswordIsValid,
  getPasswordValue,
  getUsernameIsValid,
  getUsernameValue,
} from '../../utils/dataHelper/loginScreenDataHelper';
import Button from '../../components/Button';
import logo from '../../assets/imdb.png';
import star from '../../assets/star.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    padding: 32,
    width,
  },
  row: {
    width: '100%',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 12,
  },
});

const LoginScreen = () => {
  const {
    password,
    username,
    onChangePassword,
    isSaveDisabled,
    onChangeUsername,
    onLogin,
    isLoading,
  } = useLogin({});

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <View style={styles.container}>
        <Image style={styles.image} source={star} />
        <Image style={styles.image} source={logo} />

        <View style={styles.row}>
          <Input
            onChangeText={onChangeUsername}
            isInValid={!getUsernameIsValid(username)}
            placeholder={'Username'}
            value={getUsernameValue(username)}
          />
        </View>

        <View style={styles.row}>
          <Input
            onChangeText={onChangePassword}
            isInValid={!getPasswordIsValid(password)}
            placeholder={'Password'}
            value={getPasswordValue(password)}
          />
        </View>

        <View style={styles.row}>
          <Button
            disabled={isSaveDisabled}
            onPress={onLogin}
            text={'Login'}
            isLoading={isLoading}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default LoginScreen;
