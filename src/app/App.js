import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import StackScreens from './StackScreens';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootSiblingParent>
          <NavigationContainer>
            <StackScreens />
          </NavigationContainer>
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
};

export default App;