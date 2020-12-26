import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from './Screens';
import SignIn from '../containers/SignIn/SignIn';

const screenOptions = () => ({
  initialRouteName: Screens.SIGN_IN,
  headerShown: false,
});

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <>
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name={Screens.SIGN_IN} component={SignIn} />
    </AuthStack.Navigator>
  </>
);

export default AuthStackScreen;
