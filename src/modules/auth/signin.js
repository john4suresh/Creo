// import apiClient from "../../utils/apiClient";
import { setAuthData, setRegisteredUser } from "./session";
import Toast from 'react-native-toast-message';
// import { validateEmail } from "../../utils/validate";

var randomEmail = require('random-email');

const LOGIN_START = 'auth/signin/LOGIN_START';
const ERROR = 'auth/signin/ERROR';
const CLEAR_STATE = 'auth/signin/CLEAR_STATE';
const SET_PHONE_NUMBER = 'auth/signin/SET_PHONE_NUMBER';
const SET_EMAIL = 'auth/signin/SET_EMAIL';
const SET_PASSWORD = 'auth/signin/SET_PASSWORD';
const ENTER_OTP = 'auth/signin/ENTER_OTP';
const SKIP = 'auth/signin/SKIP';
const SET_LOADING = 'SET_LOADING';
const SET_PERSONAL_DETAIL = 'SET_PERSONAL_DETAIL';

const initialState = {
  loggingIn: false,
  skip: true,
  error: {},
  errorMessage: '',
  phoneNumber: '',
  email: '',
  password: '',
  otp: '',
  loading: false,
  personalDetails: {}
};

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const startLogin = () => ({
  type: LOGIN_START,
});

export const displayError = (title, message) => ({
  type: ERROR,
  title,
  message,
});

export const skipNow = (skip) => ({
  type: SKIP,
  skip,
});

export const setPhoneNumber = (phoneNumber) => {
  return {
    type: SET_PHONE_NUMBER,
    phoneNumber,
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    email,
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    password,
  };
};

export const setOTP = (otp) => {
  return {
    type: ENTER_OTP,
    otp,
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading,
  }
}

export const setPersonalDetails = (key, value) => {
  return {
    type: SET_PERSONAL_DETAIL,
    key,
    value,
  }
}

export const requestOtp = (callback, type = 'login') => async (dispatch, getState) => {
  const state = getState();
  const { phoneNumber, loading } = state.signin;

  // try {
  // console.log("Requested OTP");
  // console.log({ phoneNumber, loading })
  // dispatch(setLoading(true));
  // const url = type === 'login' ? apiClient.Urls.login : apiClient.Urls.login;
  // const response = await apiClient.post(url, {
  //   phone: phoneNumber,
  // });

  // console.log('Request OTP---------->', response, phoneNumber);

  //   if (response.success) {
  //     if (response.verifyOtp) {
  //       dispatch(setLoading(false));
  //       if (callback) {
  //         callback();
  //       }
  //       Toast.show({
  //         text1: response.message || 'OTP Sent',
  //         type: 'success',
  //       });
  //     }
  //   } else {
  //     if (type === 'resend') {
  //       dispatch(requestOtp(callback, 'send'));
  //     }
  //     Toast.show({
  //       text1: response.message || response || "Something went wrong!",
  //       type: 'error',
  //     });
  //     dispatch(setLoading(false));
  //     dispatch({
  //       type: ERROR,
  //       errorMessage: response.message,
  //     });
  //   }
  // } catch (e) {
  //   Toast.show({
  //     text1: e.message || e || "Something went wrong!",
  //     type: 'error',

  //   });
  //   dispatch({
  //     type: ERROR,
  //     errorMessage: e.message
  //   })
  //   dispatch(setLoading(false));
  // }
};

export const validateOtp = (callback) => async (dispatch, getState) => {
  const state = getState();
  const { otp, phoneNumber } = state.signin;

  console.log({ otp })

  // try {
  //   dispatch(setLoading(true));
  //   const response = await apiClient.post(apiClient.Urls.verifyOtp, {
  //     phone: phoneNumber,
  //     otp,
  //   });

  //   console.log('Validate OTP---------->', response, phoneNumber, otp);

  //   if (response.success) {
  //     if (response?.profile?.authToken || '') {
  //       dispatch(setAuthData(response?.profile?.authToken, response.profile));
  //     }
  //     dispatch(setLoading(false));
  //     dispatch(setRegisteredUser(response.registeredUser));
  //     Toast.show({ text1: response.message || 'Login Success', type: 'success', });
  //     if (callback) {
  //       dispatch(setRegisteredUser(response.registeredUser));
  //       dispatch(skipNow(false));
  //       callback();
  //     }
  //   } else {
  //     dispatch(setLoading(false));
  //     Toast.show({ text1: response.message || "Something went wrong!", type: 'error', });
  //     dispatch(displayError("", response.message || "Something went wrong!"));
  //   }

  // } catch (e) {
  //   dispatch(setLoading(false));
  //   Toast.show({ text1: e.message || e || "Something went wrong!", type: 'error', });
  //   dispatch(displayError("", e.message || e || "Something went wrong!"));
  // }
};

export const login = () => async (dispatch, getState) => {
  const state = getState();
  const { email, password } = state.signin;

  // if (!validateEmail(email)) {
  //   Toast.show({ text1: `Please enter valid Email`, type: 'error', });
  //   return;
  // }

  // if (password.length < 3) {
  //   Toast.show({ text1: `Please enter valid password`, type: 'error', });
  //   return;
  // }

  // try {
  //   const response = await apiClient.post(apiClient.Urls.verifyOtp, {
  //     email,
  //     password,
  //   });

  //   console.log('login---------->', response, email, password);

  //   if (response.success) {
  //     dispatch(setAuthData(response.profile.authToken, response.profile));
  //     Toast.show({ text1: response.message || 'Login Success', type: 'success', });
  //     dispatch(skipNow(false));
  //   } else {
  //     Toast.show({ text1: response.message || "Something went wrong!", type: 'error', });
  //     dispatch(displayError("", response.message || "Something went wrong!"));
  //   }
  // } catch (e) {
  //   Toast.show({ text1: e.message || e || "Something went wrong!", type: 'error', });
  //   dispatch(displayError("", e.message || e || "Something went wrong!"));
  // }
};

export const profileUpdate = (callback) => async (dispatch, getState) => {
  const state = getState();
  const { otp, phoneNumber, personalDetails } = state.signin;
  // try {
  //   dispatch(setLoading(true));
  //   const { authToken, profile } = state.session;
  //   // const response = await apiClient.post(apiClient.Urls.profileUpdate, {
  //   //   name: personalDetails.name || '',
  //   //   email: randomEmail(),
  //   //   phone: phoneNumber || '',
  //   //   dob: personalDetails.dob || '',
  //   //   gender: personalDetails.gender || '',
  //   //   city: personalDetails.city || '',
  //   //   height: personalDetails.height || '',
  //   //   weight: personalDetails.weight || '',
  //   // });

  //   console.log('Update Profile---------->', response);

  //   if (response.success) {
  //     if (callback) {
  //       callback();
  //     };
  //     dispatch(setRegisteredUser(response.registeredUser));
  //     dispatch(setAuthData(response.profile.authToken, response.profile));
  //     Toast.show({ text1: response.message, type: 'success', });
  //     dispatch(setLoading(false));
  //   } else {
  //     Toast.show({ text1: response.message || "Something went wrong!", type: 'error', });
  //     dispatch(displayError("", response.message || "Something went wrong!"));
  //     dispatch(setLoading(false));
  //   }
  // } catch (e) {
  //   Toast.show({ text1: e.message || e || "Something went wrong!", type: 'error', });
  //   dispatch(displayError("", e.message || e || "Something went wrong!"));
  // }
};

export default signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        error: {
          title: action.title,
          message: action.message,
        },
        loggingIn: false,
      };
    }
    case CLEAR_STATE: {
      return {
        ...initialState,
      };
    }
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true,
        errorMessage: '',
        error: {},
      };
    }
    case ENTER_OTP: {
      return {
        ...state,
        otp: action.otp,
      };
    }
    case SET_PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.password,
      };
    }
    case SKIP: {
      return {
        ...state,
        skip: action.skip,
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.loading,
      }
    }
    case SET_PERSONAL_DETAIL: {
      return {
        ...state,
        personalDetails: {
          ...(state.personalDetails || {}),
          [action.key]: action.value,
        }
      }
    }
    default:
      return state
  }
};