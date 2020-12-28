import 'react-native-gesture-handler';
import React from 'react';
import AppDrawerScreen from '../navigation/AppDrawerScreen';
import AuthStackScreen from '../navigation/AuthStackScreen';
import {useSelector} from 'react-redux';
import {getStateUsername} from '../utils/dataHelper/auth/authReduxDataHelper';
import useToastMessage from '../features/errorHandling/useToastMessage';

const StackScreens = () => {
  useToastMessage();
  const username = useSelector((state) => getStateUsername(state));
  return username ? <AppDrawerScreen /> : <AuthStackScreen />;
};

export default StackScreens;
