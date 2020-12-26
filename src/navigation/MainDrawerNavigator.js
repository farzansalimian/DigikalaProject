import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screens from './Screens';
import CustomDrawerContent from './CustomDrawerContent';
import {AppDrawerScreen} from './AppDrawerScreen';

const Drawer = createDrawerNavigator();

const screenOptions = ({route, navigation}) => ({
  initialRouteName: Screens.PRIVATE_STACK_NAVIGATOR,
});

const MainDrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={screenOptions}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    drawerContentOptions={{}}>
    <Drawer.Screen
      name={Screens.PRIVATE_STACK_NAVIGATOR}
      component={AppDrawerScreen}
    />
  </Drawer.Navigator>
);

export {MainDrawerNavigator};
