import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import AppDrawerScreen from './src/navigation/AppDrawerScreen';
import AuthStackScreen from './src/navigation/AuthStackScreen';

const App = () => {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        {true ? <AuthStackScreen /> : <AppDrawerScreen />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
