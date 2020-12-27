import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from './Screens';
import LoginScreen from '../features/auth/LoginScreen';

const screenOptions = () => ({
  initialRouteName: Screens.SIGN_IN,
  headerShown: false,
});

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <>
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name={Screens.SIGN_IN} component={LoginScreen} />
    </AuthStack.Navigator>
  </>
);

export default AuthStackScreen;
