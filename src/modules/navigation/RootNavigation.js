import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View, } from 'react-native';


import StackNavigationData from './stackNavigationData';
import { colors, fonts } from '../../styles';

const Stack = createStackNavigator();

function NavigatorView(props) {

  return (
    <Stack.Navigator headerMode='none'>
      {StackNavigationData.slice(props?.registeredUser ? 2 : 0).map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            title: '',
            headerShown: false,
            headerLeft: null,
            headerRight: null,
            headerBackground: null,
            headerTitleStyle: null,
          }}

        />
      ))}
    </Stack.Navigator>
  );
}


export default connect(
  state => {
    return {
      registeredUser: state.session.registeredUser,
      profile: state.session.profile,
    };
  }, {
}
)(NavigatorView);
