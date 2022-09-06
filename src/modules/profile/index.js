import React from 'react';
import { View, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { Text, ListItem, HomeHeader, ProfileComponent } from '../../components';
import { Container } from './styles';
import ManageConsulting from './images/manage_consulting.svg';
import ManageAttendents from './images/manage_attendents.svg';
import HealthDetails from './images/health_details.svg';
import ManageDevices from './images/manage_devices.svg';
import ManageRemiders from './images/manage_remiders.svg';
import ManageSettings from './images/manage_settings.svg';
import SubscriptionPlan from './images/subscription_plan.svg';
import DarkManageConsulting from './images/dark_manage_consulting.svg';
import DarkManageAttendents from './images/dark_manage_attendents.svg';
import DarkHealthDetails from './images/dark_health_details.svg';
import DarkManageDevices from './images/dark_manage_devices.svg';
import DarkManageRemiders from './images/dark_manage_remiders.svg';
import DarkManageSettings from './images/dark_manage_settings.svg';
import DarkSubscriptionPlan from './images/dark_subscription_plan.svg';
import styles from './styles';
import { useColorMode } from 'native-base';
import { isDarkMode } from '../../utils/validate';
import { logout } from '../auth/session';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ navigation, logout }) => {
  console.log({ isDarkMode: isDarkMode() });
  const { colorMode } = useColorMode();

  const isDarkModeValue = isDarkMode();
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader title="Profile" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container theme={isDarkModeValue}>
            <View>
              <ProfileComponent />
              <ListItem
                leftIcon={
                  isDarkModeValue ? (
                    <DarkManageConsulting />
                  ) : (
                    <ManageConsulting />
                  )
                }
                label="Manage Consulting Doctors"
                onClick={() => navigation.navigate('ManageConsultingDoctors')}
              />
              <ListItem
                leftIcon={
                  isDarkModeValue ? (
                    <DarkManageAttendents />
                  ) : (
                    <ManageAttendents />
                  )
                }
                label="Manage Attendents"
                onClick={() => navigation.navigate('ManageAttendents')}
              />
              <ListItem
                leftIcon={
                  isDarkModeValue ? <DarkManageDevices /> : <ManageDevices />
                }
                label="Manage Devices"
                onClick={() => navigation.navigate('ManageDevices')}
              />
              <ListItem
                leftIcon={
                  isDarkModeValue ? (
                    <DarkSubscriptionPlan />
                  ) : (
                    <SubscriptionPlan />
                  )
                }
                label="Subscription Plan"
                onClick={() => navigation.navigate('SubscriptionPlan')}
              />
              <ListItem
                leftIcon={
                  isDarkModeValue ? <DarkHealthDetails /> : <HealthDetails />
                }
                label="Health Details"
                onClick={() => navigation.navigate('HealthDetails')}
              />
              <ListItem
                leftIcon={
                  isDarkModeValue ? <DarkManageRemiders /> : <ManageRemiders />
                }
                label="Manage Remiders"
                onClick={() => navigation.navigate('ManageReminders')}
              />
              <ListItem
                leftIcon={
                  isDarkModeValue ? <DarkManageSettings /> : <ManageSettings />
                }
                label="Manage Settings"
                onClick={() => navigation.navigate('ManageSettings')}
              />
              <ListItem
                leftIcon={
                  isDarkModeValue ? (
                    <Icon name="logout" size={28} color="#FFD90B" />
                  ) : (
                    <Icon name="logout" size={28} color="#0B3F8B" />
                  )
                }
                rightIcon={false}
                label="Log Out"
                onClick={() => logout()}
              />
            </View>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapStateToDispatch = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapStateToDispatch)(Profile);
