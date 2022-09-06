import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  Appearance
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NavigatorView from './RootNavigation';
import { fonts, dimens, colors } from '../../styles';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { logout, setFCMToken, setUniqueDeviceUDID, } from '../auth/session';
import { skipNow } from '../auth/signin';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import NotifService from '../../../NotifService';
import * as RootNavigation from '../../../RootNavigation';
import styles from './styles';
import { useColorMode } from 'native-base';

const drawerData = [
  {
    name: 'Dashboard',
    screen: 'Home',
  },
  {
    name: 'Logout',
  },
];

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  let check =
    props?.profile?.userID == 12 &&
    (props?.profile?.roles || []).includes('sales-manager');
  const data = drawerData
    .map(item => {
      if (item.name == 'Employee Tracker') {
        return check ? item : null;
      }
      return item;
    })
    .filter(item => item);

  // const colorScheme = Appearance.getColorScheme();
  // const { setColorMode } = useColorMode();
  // if (colorScheme === 'dark') {
  //   setColorMode('dark');
  //   props.setTheme('dark');
  // } else {
  //   setColorMode('light');
  //   props.setTheme('light');
  // }

  return (
    <>
      <DrawerContentScrollView {...props} style={{ padding: 0 }}>
        <StatusBar
          barStyle={true ? "light-content" : "dark-content"}
          backgroundColor={true ? '#27292C' : '#E0EFFF'}
          translucent={false}
        />
        <View style={styles.avatarContainer}>
          <ImageBackground
            style={styles.avatar}
          >
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <Image
                // source={require('../../../assets/images/settings.png')}
                style={styles.userLogo}
              />
              <View style={{ padding: 10, justifyContent: 'flex-start' }}>
                <Text style={styles.userName}>
                  {props.profile ? props.profile.name : 'Guest'}
                </Text>
                {props.profile ? (
                  <Text
                    style={{
                      color: colors.white,
                      fontFamily: fonts.primaryRegular,
                      fontSize: 10,
                    }}>
                    {props.profile.phone}
                  </Text>
                ) : null}
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.divider} />
        {data.map((item, idx) => (
          <>
            <DrawerItem
              key={`drawer_item-${item.name}`}
              label={() => {
                if (item.name === 'Logout') {
                  if (props.profile) {
                    return (
                      <View style={styles.menuLabelFlex}>
                        <Image
                          style={[
                            styles.icon,
                            { tintColor: colors.themeColor },
                          ]}
                          source={item.icon}
                        />
                        <Text
                          style={[
                            styles.menuTitle,
                            { color: colors.themeColor },
                          ]}>
                          {item.name}
                        </Text>
                      </View>
                    );
                  } else {
                    return (
                      <View style={styles.menuLabelFlex}>
                        <Image
                          style={[
                            styles.icon,
                            { tintColor: colors.themeColor },
                          ]}
                          source={item.icon}
                        />
                        <Text
                          style={[
                            styles.menuTitle,
                            item.name === 'Logout' && {
                              color: colors.themeColor,
                            },
                          ]}>
                          {'Login'}
                        </Text>
                      </View>
                    );
                  }
                } else {
                  return (
                    <View style={styles.menuLabelFlex}>
                      <Image style={styles.icon} source={item.icon} />
                      <Text style={[styles.menuTitle]}>{item.name}</Text>
                    </View>
                  );
                }
              }}
              onPress={() => {
                if (item.name === 'Logout') {
                  if (props.profile) {
                    props.logout();
                  } else {
                    props.skipNow(true);
                  }
                } else {
                  if (item.screen == 'Shops' || item.screen == 'Services') {
                    props.navigation.navigate(item.screen, {
                      storeType: item.screen == 'Services' ? 'service' : 'shop',
                    });
                  } else {
                    props.navigation.navigate(item.screen);
                  }
                }
              }}
            />
            <View style={styles.divider} />
          </>
        ))}
      </DrawerContentScrollView>
      <Text
        style={
          styles.appVersionText
        }>{`App version: ${DeviceInfo.getVersion()}`}</Text>
    </>
  );
}

function Navigator(props) {

  // const notif = new NotifService(
  //   (token) => onRegister(token),
  //   (notification) => onNotif(notification),
  // );

  // const getFCMToken = async () => {
  //   const token = await messaging().getToken();
  //   setNotificationToken(token);
  // }

  // const setNotificationToken = async (token = '') => {
  //   const { profile, uniqueDeviceUDID, setUniqueDeviceUDID, } = props;
  //   try {
  //     if (!uniqueDeviceUDID) {
  //       const res = await setFCMToken(token, profile?.id || '');
  //       console.log("Response Navigator ========>", { res });
  //       if (res.success) {
  //         setUniqueDeviceUDID(res.udid);
  //       }
  //     }
  //   } catch (error) {
  //     console.log('ERR------------->', error);
  //   }
  // }

  // const onRegister = async (token) => {
  //   setState({ registerToken: token.token, fcmRegistered: true });
  //   setNotificationToken(token.token);
  // }

  // const onNotif = (notification) => {
  //   if (!notification.localNotification) {
  //     notif.localNotif({ ...notification, localNotification: true, });
  //   }
  // }

  // const setNotifyHandlers = async () => {
  //   const initialNotification = await messaging().getInitialNotification();
  //   if (initialNotification) {
  //     gotToPage(initialNotification.data);
  //   }

  //   messaging().onMessage((remoteMessage) => {
  //     console.log('onMessage-------------->', remoteMessage);
  //     notif.popInitialNotification();
  //   });

  //   messaging().onNotificationOpenedApp((notification) => {
  //     console.log('onNotificationOpenedApp-------------->', notification);
  //     const data = notification.data;
  //     gotToPage(data);
  //   });

  //   await messaging().getInitialNotification((notification) => {
  //     console.log('getInitialNotification-------------->', notification);
  //     const data = notification.data;
  //     gotToPage(data);
  //   });
  // }

  // const gotToPage = (data) => {
  //   console.log('DATA-------------->', data);
  //   notif.popInitialNotification();
  //   notif.cancelAll();
  //   props.skipNow(false);
  //   if (!data) return;
  //   if (data.type == 'video') {
  //     RootNavigation.navigate('VideoScreen', {
  //       video: {
  //         ...data,
  //       }
  //     });
  //   } else if (data.type == 'store') {
  //     props.setSelectedStore({ ...data });
  //     RootNavigation.navigate('StoreDetails', { storeType: data.storeType });
  //   } else if (data.type == 'blog') {
  //     RootNavigation.navigate('BlogDetails', {
  //       blog: {
  //         ...data,
  //       }
  //     });
  //   }
  // }

  // useEffect(() => {
  //   getFCMToken();
  //   setNotifyHandlers();
  // }, []);



  // if (!props.authToken && props.skip) {
  //   const Stack = createStackNavigator();
  //   return (

  //     <Stack.Navigator headerMode='none'>
  //       <Stack.Screen name="AppIntro" component={AppIntro} />
  //       <Stack.Screen name="SignUp" component={SignUp} />
  //       <Stack.Screen name="SignUpLanding" component={SignUpLanding} />
  //       <Stack.Screen name="SignUpOTP" component={SignUpOTP} />
  //     </Stack.Navigator>
  //   );
  // }
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#fff',
      }}
      drawerContent={navProps => (
        <CustomDrawerContent {...props} {...navProps} />
      )}>
      <Drawer.Screen
        options={{
          swipeEnabled: false,
          disableGestures: false,
        }}
        name="Homes"
        component={NavigatorView}
        {...props}
      />
    </Drawer.Navigator>
  );
}

export default connect(
  state => {
    return {
      authToken: state.session.authToken,
      profile: state.session.profile,
      uniqueDeviceUDID: state.session.uniqueDeviceUDID,
      skip: state.signin.skip,
    };
  },
  {
    logout,
    skipNow,
    setUniqueDeviceUDID,
  },
)(Navigator);
