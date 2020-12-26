import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Input from '../../components/Input';
import useSignIn from './useSignIn';
import {
  getPasswordIsValid,
  getPasswordValue,
  getUsernameIsValid,
  getUsernameValue,
} from '../../utilites/signInDataHelper';
import Button from '../../components/Button';
import logo from '../../assets/imdb.png';
import star from '../../assets/star.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width,
    paddingTop: 32,
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

const SignIn = () => {
  const {
    password,
    username,
    onChangePassword,
    isSaveDisabled,
    onChangeUsername,
  } = useSignIn({});

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
          <Button disabled={isSaveDisabled} onPress={() => {}} text={'Login'} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignIn;
