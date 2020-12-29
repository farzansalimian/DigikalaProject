import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SCREENS from '../constants/screens';
import MoviesScreen from '../features/movies/MoviesScreen';
import CategoriesScreen from '../features/categories/CategoriesScreen';
import CustomDrawerContent from './CustomDrawerContent';

const screenOptions = () => ({
  initialRouteName: SCREENS.MOVIES,
});

const AppDrawer = createDrawerNavigator();

function AppDrawerScreen() {
  return (
    <AppDrawer.Navigator
      screenOptions={screenOptions}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <AppDrawer.Screen
        unmountOnBlur
        name={SCREENS.MOVIES}
        component={MoviesScreen}
      />
      <AppDrawer.Screen
        unmountOnBlur
        name={SCREENS.CATEGORIES}
        component={CategoriesScreen}
      />
    </AppDrawer.Navigator>
  );
}

export default AppDrawerScreen;
