import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './styles';
import BackArrowIcon from "./Images/backArrowIcon.svg";
import SidebarMenu from "./Images/sidebarMenuIcon.svg";
import TopNotificationCount from "./Images/topNotificationCountIcon.svg"

const Header = (props) => {
  const width = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Avyuktha
        </Text>
        <Text style={styles.subLabel}>
          F: Gnaneshwar | 1st B Section
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'white', padding: 5, borderRadius: 5, marginRight: 20 }}>
          <TopNotificationCount width={width * 0.065} height={width * 0.065} />
        </View>
        <View>
          <SidebarMenu width={width * 0.075} height={width * 0.075} />
        </View>
      </View>

    </View>
  )
}

export default Header;