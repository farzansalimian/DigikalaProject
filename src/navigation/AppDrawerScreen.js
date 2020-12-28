import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screens from './Screens';
import MoviesScreen from '../features/movies/MoviesScreen';
import CategoriesScreen from '../features/categories/CategoriesScreen';
import CustomDrawerContent from './CustomDrawerContent';

const screenOptions = () => ({
  initialRouteName: Screens.MOVIES,
});

const AppDrawer = createDrawerNavigator();

const AppDrawerScreen = () => (
  <AppDrawer.Navigator
    screenOptions={screenOptions}
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <AppDrawer.Screen
      unmountOnBlur
      name={Screens.MOVIES}
      component={MoviesScreen}
    />
    <AppDrawer.Screen
      unmountOnBlur
      name={Screens.CATEGORIES}
      component={CategoriesScreen}
    />
  </AppDrawer.Navigator>
);

export default AppDrawerScreen;
