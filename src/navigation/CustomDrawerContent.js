import React, { memo, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  // useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { APP_VERSION, BUILD_DATE, getBuildNumber } from 'sp-shared-codes/src/constants/MobileAppVersion';
import { setMainLeftPaneSelectedId, togglePopUp } from 'sp-shared-codes/src/actions/applicationActions';
import { signOut } from 'sp-shared-codes/src/actions/authActions';
import { getFavoriteTrees, getMainLeftPaneSelectedId } from 'sp-shared-codes/src/util/reduxUtil';
import PopUpTypes from 'sp-shared-codes/src/constants/enum/PopUpTypes';
import {
  getDeferPopupValue,
  getPauseRecurringPopupValue,
  getRecurrenceSummaryPopupValue, getRecurringPopupValue,
  getRecurringSessionsPopupValue,
} from 'sp-shared-codes/src/util/PopUpUtil';

import Screens from './Screens';
import { useTheme } from '../../theme/hooks';
import SPDrawerItem from './SPDrawerItem';
import InboxIcon from '../../assets/images/left-pane-inbox-icon.svg';
import TodayIcon from '../../assets/images/left-pane-today-icon.svg';
import OutlineIcon from '../../assets/images/left-pane-outline-icon.svg';
import CalendarIcon from '../../assets/images/left-pane-calendar-icon.svg';
import SuggestionIcon from '../../assets/images/left-pane-suggestions-icon.svg';
import SPLeftFavoriteTree from '../SpCustomComponents/SPLeftFavoriteTree';
import SPExpansionPanel from '../SpCustomComponents/SPExpansionPanel';
import { LeftPaneFavoritesIcon } from '../../Icons/SvgIcons';
import {getShareCodeValuesInboxNode} from "sp-shared-codes/src/util/helpers/shareCodeValuesHelper";

const {
  RECURRING_SESSIONS, RECURRENCE_SUMMARY, PAUSE_RECURRING, DEFER, RECURRING,
} = PopUpTypes;

const theme = useTheme();

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 24,
    paddingTop: 24,
    height: 96,
    backgroundColor: theme.palette.primaryShade6.main,
  },
  title: {
    marginBottom: 8,
    color: '#FFF',
    ...theme.typography.normal16px,
  },
  caption: {
    color: '#FFF',
    ...theme.typography.normal12px,
  },
  drawerItem: {
    height: 48,
    borderRadius: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 6,
  },
  drawerItemLabelStyle: {
    ...theme.typography.normal14px,
    marginLeft: -16,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    padding: 2,
    paddingBottom: 8,
    paddingLeft: 20,
    borderTopColor: theme.palette.neutralShare9.main,
    borderTopWidth: 1,
  },
  versionStyle: {
    color: theme.palette.neutralShare8.main,
    ...theme.typography.normal14px,
    marginBottom: 2,
  },
  buildNumberStyle: {
    color: theme.palette.neutralShare7.main,
    ...theme.typography.normal12px,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

const CustomDrawerContent = memo((props) => {
  // const paperTheme = useTheme();
  const {
    navigation, user, signOut, setMainLeftPaneSelectedId, mainLeftPaneSelectedId,
    togglePopUp, favoriteTrees,
  } = props;

  // const { signOut, toggleTheme } = React.useContext(AuthContext);

  useEffect(() => {
    if (!mainLeftPaneSelectedId) setMainLeftPaneSelectedId(Screens.MAIN_PAGE_SCREEN);
  }, []);

  const getAvatar = (user, size = 48) => {
    if (!user) return null;
    if (user.photo) {
      return (
        <Avatar.Image
          source={{
            uri: user.photo,
          }}
          size={size}
        />
      );
    }
    let name = '';
    if (user.firstName && user.firstName.length && user.lastName && user.lastName.length) name = user.firstName[0] + user.lastName[0];
    else if (user.email && user.email.length) name = user.email[0];
    const avatarText = name && name.length ? name.toUpperCase() : '';
    return <Avatar.Text size={size} label={avatarText} />;
  };

  const isItemSelected = (screen) => mainLeftPaneSelectedId === screen;

  const DrawerItemWrapper = ({
    icon, label, onPress, screen,
  }) => (
    <SPDrawerItem
      icon={icon}
      label={label}
      onPress={onPress}
      isSelected={isItemSelected(screen)}
      activeBackgroundColor={theme.palette.neutralShare10.main}
      activeTintColor={theme.palette.neutralShare1.main}
      inactiveTintColor={theme.palette.neutralShare1.main}
      color={theme.palette.neutralShare1.main}
      labelStyle={styles.drawerItemLabelStyle}
      itemStyle={styles.drawerItem}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row' }}>
              {getAvatar(user)}
              <View style={{ marginLeft: 24, flexDirection: 'column' }}>
                <Title style={styles.title}>{`${user.firstName} ${user.lastName}`}</Title>
                <Caption style={styles.caption}>{user.email}</Caption>
              </View>
            </View>

          </View>

          <Drawer.Section style={styles.drawerSection}>

            <DrawerItemWrapper
              icon={({ color, size }) => (
                <InboxIcon
                  width={20}
                  height={20}
                  fill={isItemSelected(Screens.MAIN_PAGE_SCREEN)
                    ? theme.palette.neutralShare5.main
                    : theme.palette.neutralShare7.main}
                />
              )}
              label="Inbox"
              onPress={() => {
                navigation.navigate(Screens.OUTLINE_SCREEN, {taskId: getShareCodeValuesInboxNode()});
                setMainLeftPaneSelectedId(Screens.MAIN_PAGE_SCREEN);
              }}
              screen={Screens.MAIN_PAGE_SCREEN}
            />

            <DrawerItemWrapper
              icon={({ color, size }) => (
                <TodayIcon
                  width={20}
                  height={20}
                  fill={isItemSelected(null)
                    ? theme.palette.neutralShare5.main
                    : theme.palette.neutralShare7.main}
                />
              )}
              label="Today"
              onPress={() => {
                navigation.navigate(Screens.FLAT_LIST, { isToday: true });
                setMainLeftPaneSelectedId(Screens.FLAT_LIST);
              }}
              screen={null}
            />

            <DrawerItemWrapper
              icon={({ color, size }) => (
                <OutlineIcon
                  width={20}
                  height={20}
                  fill={isItemSelected(Screens.OUTLINE_SCREEN)
                    ? theme.palette.neutralShare5.main
                    : theme.palette.neutralShare7.main}
                />
              )}
              label="Outline"
              onPress={() => {
                navigation.navigate(Screens.OUTLINE_SCREEN);
                setMainLeftPaneSelectedId(Screens.OUTLINE_SCREEN);
              }}
              screen={Screens.OUTLINE_SCREEN}
            />

            <DrawerItemWrapper
              icon={({ color, size }) => (
                <CalendarIcon
                  width={20}
                  height={20}
                  fill={isItemSelected(Screens.CALENDAR_SCREEN)
                    ? theme.palette.neutralShare5.main
                    : theme.palette.neutralShare7.main}
                />
              )}
              label="Calendar"
              onPress={() => {
                navigation.navigate(Screens.CALENDAR_SCREEN);
                setMainLeftPaneSelectedId(Screens.CALENDAR_SCREEN);
              }}
              screen={Screens.CALENDAR_SCREEN}
            />
            <DrawerItemWrapper
              icon={({ color, size }) => (
                <CalendarIcon
                  width={20}
                  height={20}
                  fill={isItemSelected(Screens.RECURRING_SCREEN)
                    ? theme.palette.neutralShare5.main
                    : theme.palette.neutralShare7.main}
                />
              )}
              label="Recurring"
              onPress={() => {
                togglePopUp(RECURRENCE_SUMMARY, getRecurrenceSummaryPopupValue({}, 'avw707wqcfmnn3cO0ixa', 'kSkmd93TRobXGIPWHWGl', null));
                // togglePopUp(RECURRING_SESSIONS, getRecurringSessionsPopupValue({}, 'avw707wqcfmnn3cO0ixa', 'kSkmd93TRobXGIPWHWGl', false, null));
                // togglePopUp(PAUSE_RECURRING, getPauseRecurringPopupValue({}, 'avw707wqcfmnn3cO0ixa', 'kSkmd93TRobXGIPWHWGl'));
                // togglePopUp(DEFER, getDeferPopupValue({}, null, 'sba4UmJfaqERIETR0ki5', '7qO8Qcq3pMLFGJI2pjTq', { start: '2020-12-07' }, null));
                // togglePopUp(RECURRING, getRecurringPopupValue({}, 'kSkmd93TRobXGIPWHWGl', 'avw707wqcfmnn3cO0ixa'));
                setMainLeftPaneSelectedId(Screens.RECURRING_SCREEN);
              }}
              screen={Screens.RECURRING_SCREEN}
            />

            <DrawerItemWrapper
              icon={({ color, size }) => (
                <SuggestionIcon
                  width={20}
                  height={20}
                  fill={isItemSelected(null)
                    ? theme.palette.neutralShare5.main
                    : theme.palette.neutralShare7.main}
                />
              )}
              label="Suggestions"
              onPress={() => {
                navigation.navigate(Screens.SUGGESTIONS);
                setMainLeftPaneSelectedId(Screens.SUGGESTIONS);
              }}
              screen={null}
            />

          </Drawer.Section>
          <Drawer.Section>
            <SPExpansionPanel title="Favorites" expandedKey="SP_Left_Favorite_Tree" titleIcon={<LeftPaneFavoritesIcon />}>
              <SPLeftFavoriteTree
                tree={favoriteTrees[0]}
                navigation={navigation}
                onFavoriteItemPress={() => {
                  navigation.navigate(Screens.OUTLINE_SCREEN);
                  setMainLeftPaneSelectedId(Screens.OUTLINE_SCREEN);
                  navigation.closeDrawer();
                }}
              />
            </SPExpansionPanel>
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItemWrapper
              icon={({ color, size }) => (
                <Icon
                  name="exit-to-app"
                  color={theme.palette.neutralShare7.main}
                  size={24}
                />
              )}
              label="Sign Out"
              onPress={() => { signOut(); }}
              screen={null}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <Text style={styles.versionStyle}>{`Version ${APP_VERSION}`}</Text>
        <Text style={styles.buildNumberStyle}>{`Build No ${getBuildNumber()} ${BUILD_DATE}`}</Text>
      </View>
    </View>
  );
});

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  mainLeftPaneSelectedId: getMainLeftPaneSelectedId(state),
  favoriteTrees: getFavoriteTrees(state),
});

const mapDispatchToProps = (dispatch) => (bindActionCreators({
  signOut,
  setMainLeftPaneSelectedId,
  togglePopUp,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent);
