import * as React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { View, Image, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, fonts } from '../../styles';
import styles from './styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { Text } from '../../components';

import tabNavigationData from './tabNavigationData';
// import { isDarkMode } from '../../utils/validate';

const Tab = createBottomTabNavigator();

function BottomTabs({ navigation }) {
  const headerRightComponent = screenName => {
    return null;
  };

  // const isDarkModeValue = isDarkMode();

  return (
    <SafeAreaProvider>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: Platform.OS === 'ios' ? 90 : 50,
            backgroundColor: false ? '#000000' : '#4CA0FF',
          },
        }}>
        {tabNavigationData.map((item, idx) => (
          <Tab.Screen
            key={`tab_item${idx + 1}`}
            name={item.name}
            component={item.component}
            listeners={{
              tabPress: e => {
                // Prevent default action
                navigation.setOptions({
                  headerRight: () => headerRightComponent(item.name),
                });
              },
            }}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={[
                    styles.tabBarItemContainer,
                    focused
                      ? false
                        ? { backgroundColor: '#FFD90B' }
                        : { backgroundColor: '#4177C9' }
                      : false
                        ? { backgroundColor: 'transparent' }
                        : { backgroundColor: 'transparent' },
                  ]}>
                  <Image
                    resizeMode="contain"
                    source={item.icon}
                    style={[
                      styles.tabBarIcon,
                      focused && false
                        ? styles.tabBarIconFocusedDark
                        : styles.tabBarIconFocused,
                    ]}
                  />
                  <Text
                    type="h6"
                    medium
                    style={{
                      color: focused
                        ? false
                          ? '#000000'
                          : '#FFFFFF'
                        : false
                          ? '#E0EFFF'
                          : '#E0EFFF',
                      paddingTop: 5,
                    }}>
                    {item.name}
                  </Text>
                </View>
              ),
              tabBarLabel: () => null,
              // tabBarLabel: ({ focused }) => (
              //   <Text
              //     style={{
              //       fontSize: 12,
              //       color: focused ? '#FFFFFF' : '#E0EFFF',
              //       fontFamily: fonts.primarySemiBold,
              //       backgroundColor: '#FF0000'
              //     }}>
              //     {item.name}
              //   </Text>
              // ),
            }}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

export default connect(state => {
  return {};
}, {})(BottomTabs);
