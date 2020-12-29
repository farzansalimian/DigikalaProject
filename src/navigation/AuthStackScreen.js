import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREENS from '../constants/screens';
import AuthScreen from '../features/auth/AuthScreen';

const screenOptions = () => ({
  initialRouteName: SCREENS.SIGN_IN,
  headerShown: false,
});

const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name={SCREENS.SIGN_IN} component={AuthScreen} />
    </AuthStack.Navigator>
  );
}

export default AuthStackScreen;
