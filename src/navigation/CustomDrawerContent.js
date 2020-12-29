import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import SCREENS from '../constants/screens';
import {useDispatch} from 'react-redux';
import {logout} from '../features/auth/authSlice';

function CustomDrawerContent(props) {
  const {navigation} = props;
  const dispatch = useDispatch();

  const homeOnPress = () => {
    navigation.navigate(SCREENS.MOVIES, {categoryName: null});
  };

  const categoriesOnPress = () => {
    navigation.navigate(SCREENS.CATEGORIES);
  };

  const logoutOnPress = () => {
    dispatch(logout());
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={homeOnPress} />
      <DrawerItem label="Categories" onPress={categoriesOnPress} />
      <DrawerItem label="Logout" onPress={logoutOnPress} />
    </DrawerContentScrollView>
  );
}
export default CustomDrawerContent;
