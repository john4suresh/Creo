import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
// import apiClient from '../../utils/apiClient';
// import getDeviceInfo from '../../utils/getDeviceInfo';
import { skipNow } from './signin';

const SET_AUTH_DATA = 'auth/session/SET_AUTH_DATA';
const LOGOUT_SUCCESS = 'auth/session/LOGOUT_SUCCESS';
const ERROR = 'auth/session/ERROR';
const REGISTERED_USER = 'auth/session/REGISTERED_USER';
const SET_UNIQUE_DEVICE_UDID = 'auth/session/SET_UNIQUE_DEVICE_UDID';
const SET_CONNECTED_RITHM_DEVICE_DETAILS = 'auth/session/SET_CONNECTED_RITHM_DEVICE_DETAILS';


const initialState = {
  authToken: null,
  profile: null,
  registeredUser: false,
  uniqueDeviceUDID: '',
  rithmDevice: null,
  rithmDeviceConnectTimestamp: null,
};

export const setAuthData = (authToken, profile) => ({
  type: SET_AUTH_DATA,
  authToken,
  profile,
});

export const setRegisteredUser = (registeredUser) => ({
  type: REGISTERED_USER,
  registeredUser,
});

export const logout = () => (dispatch, getState) => {
  const { authToken } = getState().session;
  const deviceId = DeviceInfo.getUniqueId();
  // dispatch(skipNow(true));
  // apiClient.post(apiClient.Urls.logout, {
  //   authToken,
  //   device_id: deviceId,
  // }).then((res) => {
  //   dispatch({
  //     type: LOGOUT_SUCCESS,
  //   });
  // }).catch(e => {
  //   dispatch({
  //     type: LOGOUT_SUCCESS,
  //   });
  // });
};

export const setFCMToken = async (token, userId) => {
  // const deviceInfo = getDeviceInfo();

  // return await apiClient.post(`${apiClient.Urls.init}`, {
  //   notificationToken: token,
  //   type: "patient",
  //   ...deviceInfo,
  // });
  return null;
};

export const setUniqueDeviceUDID = (uniqueDeviceUDID) => ({
  type: SET_UNIQUE_DEVICE_UDID,
  uniqueDeviceUDID,
});

export const setConnectedRithmDeviceDetails = (rithmDevice, rithmDeviceConnectTimestamp) => ({
  type: SET_CONNECTED_RITHM_DEVICE_DETAILS,
  rithmDevice,
  rithmDeviceConnectTimestamp,
});

export default sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        authToken: action.authToken,
        profile: action.profile,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authToken: null,
        profile: null,
        registeredUser: false,
        uniqueDeviceUDID: '',
        rithmDevice: null,
        rithmDeviceConnectTimestamp: null,
      };
    case ERROR: {
      return {
        ...state,
        message: action.message,
      }
    }
    case REGISTERED_USER: {
      return {
        ...state,
        registeredUser: action.registeredUser,
      }
    }
    case SET_UNIQUE_DEVICE_UDID: {
      return {
        ...state,
        uniqueDeviceUDID: action.uniqueDeviceUDID,
      }
    }
    case SET_CONNECTED_RITHM_DEVICE_DETAILS: {
      return {
        ...state,
        rithmDevice: action.rithmDevice,
        rithmDeviceConnectTimestamp: action.rithmDeviceConnectTimestamp,
      }
    }
    default:
      return state;
  }
};
