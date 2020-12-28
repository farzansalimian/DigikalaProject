import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Input from '../../components/Input';
import useAuth from './useAuth';
import {
  getPasswordIsValid,
  getPasswordValue,
  getUsernameIsValid,
  getUsernameValue,
} from '../../utils/dataHelper/auth/authScreenDataHelper';
import Button from '../../components/Button';
import logo from '../../assets/imdb.gif';
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
    height: 250,
    marginBottom: 12,
  },
});

const AuthScreen = () => {
  const {
    password,
    username,
    onChangePassword,
    isSaveDisabled,
    onChangeUsername,
    onLogin,
    isLoading,
  } = useAuth({});

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <View style={styles.container}>
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
export default AuthScreen;
