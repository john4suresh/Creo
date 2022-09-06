import Toast from 'react-native-toast-message';
// import apiClient from "../../utils/apiClient";

const GET_DASHBOARD_STATS_DATA_START = 'Modules/home/GET_DASHBOARD_STATS_DATA_START';
const GET_DASHBOARD_STATS_DATA_SUCCESS = 'Modules/home/GET_DASHBOARD_STATS_DATA_SUCCESS';
const GET_DASHBOARD_STATS_DATA_FAIL = 'Modules/home/GET_DASHBOARD_STATS_DATA_FAIL';
const RITHM_CONNECTION_UPDATE_START = 'RITHM_CONNECTION_UPDATE_START';
const RITHM_CONNECTION_UPDATE_SUCCESS = 'RITHM_CONNECTION_UPDATE_SUCCESS';
const RITHM_CONNECTION_UPDATE_FAIL = 'RITHM_CONNECTION_UPDATE_FAIL';


const SUBMIT_BLE_DEVICE_DATA_START = 'Modules/home/SUBMIT_BLE_DEVICE_DATA_START';
const SUBMIT_BLE_DEVICE_DATA_SUCCESS = 'Modules/home/SUBMIT_BLE_DEVICE_DATA_SUCCESS';
const SUBMIT_BLE_DEVICE_DATA_FAIL = 'Modules/home/SUBMIT_BLE_DEVICE_DATA_FAIL';

const SET_BLE_DEVICES_LIST = 'Modules/home/SET_BLE_DEVICES_LIST';
const SET_CONNECTED_DEVICE_DATA = 'Modules/home/SET_CONNECTED_DEVICE_DATA';
const SET_ECG_DATA = 'Modules/home/SET_ECG_DATA';

const getInitialState = () => ({
  dashboardData: null,
  rithmConnectionUpdate: null,
  vitalsData: null,
  bleDevices: [],
  connectedDevice: {},
  ecgData: [],
});


export const getDashboardStatsData = () => async (dispatch, getState) => {
  // try {

  //   const state = getState();

  //   dispatch({
  //     type: GET_DASHBOARD_STATS_DATA_START,
  //   });

  //   const response = await apiClient.get(`${apiClient.Urls.dashboardData}`, {
  //     authToken: state.session.authToken,
  //   });

  //   if (response.success) {
  //     dispatch({
  //       type: GET_DASHBOARD_STATS_DATA_SUCCESS,
  //       dashboardData: response.data,
  //     });
  //   } else {
  //     Toast.show({ text1: response.message || "Something went wrong!", type: 'error', });
  //     dispatch({
  //       type: GET_DASHBOARD_STATS_DATA_FAIL,
  //     });
  //   }
  // } catch (e) {
  //   Toast.show({ text1: e.message || e || "Something went wrong!", type: 'error', });
  // }
};

export const getRithmConnectionUpdate = (payload, callback) => async (dispatch, getState) => {
  // try {
  //   const state = getState();
  //   dispatch({
  //     type: RITHM_CONNECTION_UPDATE_START,
  //   });

  //   const response = await apiClient.post(`${apiClient.Urls.rithmConnectionUpdate}`, {
  //     ...payload,
  //     userId: state.session.profile.id,
  //   });

  //   if (response.success) {
  //     dispatch({
  //       type: RITHM_CONNECTION_UPDATE_SUCCESS,
  //       rithm: response.rithm
  //     });
  //     Toast.show({ text1: response.message, type: 'success', });
  //     if (callback) {
  //       callback(response);
  //     }
  //   } else {
  //     Toast.show({ text1: response.message || "Something went wrong!", type: 'error', });
  //     dispatch({
  //       type: RITHM_CONNECTION_UPDATE_FAIL,
  //     });
  //   }

  // } catch (e) {
  //   Toast.show({ text1: e.message || e || "Something went wrong!", type: 'error', });
  // }
}
export const submitBleDeviceData = (deviceId, data, timestamp, deviceConnectStatus) => async (dispatch, getState) => {
  // try {

  //   const state = getState();

  //   dispatch({
  //     type: SUBMIT_BLE_DEVICE_DATA_START,
  //   });

  //   const response = await apiClient.post(`${apiClient.Urls.vitalStore}`, {
  //     userId: state.session.profile.id,
  //     deviceId,
  //     vitals: data,
  //     timestamp,
  //     deviceConnectStatus,
  //   });

  //   console.log('response---------->', response);

  //   if (response.success) {
  //     dispatch({
  //       type: SUBMIT_BLE_DEVICE_DATA_SUCCESS,
  //       vitalsData: response,
  //     });
  //   } else {
  //     Toast.show({ text1: response?.message || response?.status || "Something went wrong!", type: 'error', });
  //     dispatch({
  //       type: SUBMIT_BLE_DEVICE_DATA_FAIL,
  //     });
  //   }
  // } catch (e) {
  //   console.log('error------------>', e);
  //   Toast.show({ text1: e.message || e || "Something went wrong!", type: 'error', });
  // }
};

export const setBleDevicesList = (bleDevices = []) => ({
  type: SET_BLE_DEVICES_LIST,
  bleDevices,
});

export const setConnectedDeviceData = (connectedDevice = false) => ({
  type: SET_CONNECTED_DEVICE_DATA,
  connectedDevice,
});

export const setECGData = (ecgData) => ({
  type: SET_ECG_DATA,
  ecgData,
});

export default homeReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case GET_DASHBOARD_STATS_DATA_START: {
      return {
        ...state,
        errorMessage: '',
        dashboardData: [],
        loading: true,
      }
    }
    case GET_DASHBOARD_STATS_DATA_SUCCESS: {
      return {
        ...state,
        dashboardData: action.dashboardData,
        loading: false,
      }
    }
    case GET_DASHBOARD_STATS_DATA_FAIL: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
      }
    }
    case RITHM_CONNECTION_UPDATE_START: {
      return {
        ...state
      }
    }
    case RITHM_CONNECTION_UPDATE_SUCCESS: {
      return {
        ...state,
        rithmConnectionUpdate: action.rithm,
      }
    }
    case RITHM_CONNECTION_UPDATE_FAIL: {
      return {
        ...state,
        rithmConnectionUpdate: {},
      }
    }
    case SUBMIT_BLE_DEVICE_DATA_START: {
      return {
        ...state,
      }
    }
    case SUBMIT_BLE_DEVICE_DATA_SUCCESS: {
      return {
        ...state,
        vitalsData: action.vitalsData,
      }
    }
    case SUBMIT_BLE_DEVICE_DATA_FAIL: {
      return {
        ...state,
      }
    }
    case SET_BLE_DEVICES_LIST: {
      return {
        ...state,
        bleDevices: action.bleDevices,
      }
    }
    case SET_CONNECTED_DEVICE_DATA: {
      return {
        ...state,
        connectedDevice: action.connectedDevice,
      }
    }
    case SET_ECG_DATA: {
      return {
        ...state,
        ecgData: action.ecgData,
      }
    }
    default:
      return state;
  }
};