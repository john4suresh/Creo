import { Provider } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  LogBox,
} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { colors, fonts } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppView';
import CodePush from 'react-native-code-push';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { } from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // Ignore log "VirtualizedLists should never be nested"

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#69C779' }}
      text1Style={{
        fontSize: 12,
        fontFamily: fonts.primarySemiBold,
        marginLeft: -10,
      }}
      text1NumberOfLines={3}
      text2Style={{
        fontSize: 12,
        fontFamily: fonts.primarySemiBold,
        marginLeft: -10,
      }}
      autoHide={false}
      onPress={() => Toast.hide()}
      renderLeadingIcon={() => (
        <AntDesign
          style={[
            styles.toastIconStyles,
            { color: '#69C779', paddingLeft: 10 },
          ]}
          name={'checkcircleo'}
        />
      )}
      renderTrailingIcon={() => (
        <MaterialIcons
          style={[
            styles.toastIconStyles,
            { color: '#FE6301', paddingRight: 10 },
          ]}
          name={'cancel'}
        />
      )}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 12,
        fontFamily: fonts.primarySemiBold,
        marginLeft: -10,
      }}
      text1NumberOfLines={3}
      text2Style={{
        fontSize: 12,
        fontFamily: fonts.primarySemiBold,
        marginLeft: -10,
      }}
      autoHide={false}
      onPress={() => Toast.hide()}
      renderLeadingIcon={() => (
        <AntDesign
          style={[
            styles.toastIconStyles,
            { color: '#FE6301', paddingLeft: 10 },
          ]}
          name={'warning'}
        />
      )}
      renderTrailingIcon={() => (
        <MaterialIcons
          style={[
            styles.toastIconStyles,
            { color: '#FE6301', paddingRight: 10 },
          ]}
          name={'cancel'}
        />
      )}
    />
  ),
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    appReady: false,
    restartAllowed: true,
    isFirstLaunch: null,
  };

  // async componentDidMount() {
  //   // const deviceInfo = await getDeviceInfo();
  //   this.syncImmediate();
  //   setTimeout(() => {
  //     this.setState({ appReady: true });
  //   }, 2000);
  // }

  // codePushStatusDidChange = syncStatus => {
  //   console.log('syncStatus------------->', syncStatus);
  //   switch (syncStatus) {
  //     case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
  //       this.setState({ syncMessage: 'Checking for update.' });
  //       break;
  //     case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
  //       this.setState({ syncMessage: 'Downloading package.' });
  //       break;
  //     case CodePush.SyncStatus.AWAITING_USER_ACTION:
  //       this.setState({ syncMessage: 'Awaiting user action.' });
  //       break;
  //     case CodePush.SyncStatus.INSTALLING_UPDATE:
  //       this.setState({ syncMessage: 'Installing update.' });
  //       break;
  //     case CodePush.SyncStatus.UP_TO_DATE:
  //       this.setState({ syncMessage: 'App up to date.', progress: false });
  //       break;
  //     case CodePush.SyncStatus.UPDATE_IGNORED:
  //       this.setState({
  //         syncMessage: 'Update cancelled by user.',
  //         progress: false,
  //       });
  //       break;
  //     case CodePush.SyncStatus.UPDATE_INSTALLED:
  //       this.setState({
  //         syncMessage: 'Update installed and will be applied on restart.',
  //         progress: false,
  //       });
  //       break;
  //     case CodePush.SyncStatus.UNKNOWN_ERROR:
  //       this.setState({
  //         syncMessage: 'An unknown error occurred.',
  //         progress: false,
  //       });
  //       break;
  //   }
  // };

  // codePushDownloadDidProgress = progress => {
  //   console.log('------------PROGRESS', progress);
  //   this.setState({ progress });
  // };

  // getUpdateMetadata = () => {
  //   CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).then(
  //     metadata => {
  //       console.log('META DATA---------------->', metadata);
  //       this.setState({
  //         syncMessage: metadata
  //           ? JSON.stringify(metadata)
  //           : 'Running binary version',
  //         progress: false,
  //       });
  //     },
  //     error => {
  //       this.setState({ syncMessage: 'Error: ' + error, progress: false });
  //     },
  //   );
  // };

  /** Update pops a confirmation dialog, and then immediately reboots the app */
  // syncImmediate = () => {
  //   CodePush.sync(
  //     { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
  //     this.codePushStatusDidChange(),
  //     this.codePushDownloadDidProgress(),
  //   );
  // };

  render() {
    const newColorTheme = {
      brand: {
        900: '#8287af',
        800: '#7c83db',
        700: '#b3bef6',
      },
    };
    const theme = extendTheme({ colors: newColorTheme });



    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <NativeBaseProvider theme={theme} >
            <StatusBar
              barStyle="light-content"
              backgroundColor={'transparent'}
              translucent={true}
            />
            <NavigationContainer>
              <PersistGate
                loading={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <View style={styles.container}>
                    <ActivityIndicator color={colors.red} />
                  </View>
                }
                persistor={persistor}>
                <AppView />
              </PersistGate>
            </NavigationContainer>
            <Toast config={toastConfig} />
          </NativeBaseProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  toastIconStyles: {
    fontSize: 24,
    alignSelf: 'center',
  },
});

// let codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };

// App = CodePush(codePushOptions)(App);

export default App;
