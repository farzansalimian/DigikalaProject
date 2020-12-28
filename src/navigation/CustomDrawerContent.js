import React, {useCallback} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Screens from './Screens';
import {useDispatch} from 'react-redux';
import {logout} from '../features/auth/authSlice';

function CustomDrawerContent(props) {
  const {navigation} = props;
  const dispatch = useDispatch();

  const homeOnPress = useCallback(() => {
    navigation.navigate(Screens.MOVIES, {categoryName: null});
  }, []);

  const categoriesOnPress = useCallback(() => {
    navigation.navigate(Screens.CATEGORIES);
  }, []);

  const logoutOnPress = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={homeOnPress} />
      <DrawerItem label="Categories" onPress={categoriesOnPress} />
      <DrawerItem label="Logout" onPress={logoutOnPress} />
    </DrawerContentScrollView>
  );
}
export default CustomDrawerContent;
