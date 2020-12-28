import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from './Screens';
import AuthScreen from '../features/auth/AuthScreen';

const screenOptions = () => ({
  initialRouteName: Screens.SIGN_IN,
  headerShown: false,
});

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <>
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name={Screens.SIGN_IN} component={AuthScreen} />
    </AuthStack.Navigator>
  </>
);

export default AuthStackScreen;
