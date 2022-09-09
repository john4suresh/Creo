import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { colors, fonts } from '../../styles';
import TabNavigator from './MainTabNavigator';
import Login from '../auth/Login';
import HomeView from '../home/HomeView';



// const headerLeftComponent = props => {
//   return (
//     <TouchableOpacity
//       onPress={props.onPress}
//       style={{
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//       }}>
//       <Image
//         source={require('../../../assets/images/settings.png')}
//         resizeMode="contain"
//         style={{
//           width: 22,
//           height: 22,
//           tintColor: '#1F1F1F',
//         }}
//       />
//     </TouchableOpacity>
//   );
// };

// const logo = require('@images/settings.png');

const StackNavigationData = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Home',
    component: HomeView,
  }
];

export default StackNavigationData;
