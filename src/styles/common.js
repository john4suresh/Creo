import React from 'react';

import { StyleSheet, StatusBar, Platform } from 'react-native';

import { Text } from 'native-base';

import colors from './colors';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
  },
});


// heading == 20
// subtitle == 18
// label == 14
// description ==
// short

// Text
// Input
// Button
// DropDown
// Modal
//

// h1 = 24
// h2 = 20
// h3 =18
// h4 = 16
// h5 = 14
// h6 = 12
// p =10