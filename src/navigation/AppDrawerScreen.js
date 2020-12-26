import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screens from './Screens';
import Home from '../containers/Home';
import Categories from '../containers/Categories';
import Movies from '../containers/Movies';

const screenOptions = () => ({
  initialRouteName: Screens.HOME,
});

const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => (
  <AppDrawer.Navigator screenOptions={screenOptions}>
    <AppDrawer.Screen name={Screens.HOME} component={Home} />
    <AppDrawer.Screen name={Screens.CATEGORIES} component={Categories} />
    <AppDrawer.Screen name={Screens.MOVIES} component={Movies} />
  </AppDrawer.Navigator>
);

export default AppDrawerScreen;
