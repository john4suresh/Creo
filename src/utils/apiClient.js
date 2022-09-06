// export const baseUrl = 'https://deepfacts.com/';
export const baseUrl = 'http://3.232.4.220/';
export const pythonUrl = 'http://44.205.133.187:5566/';

const apiClient = {
  Urls: {
    login: baseUrl + 'api/login',
    verifyOtp: baseUrl + 'api/verifyOtp',
    register: baseUrl + 'api/register',
    init: baseUrl + 'api/device/init',
    profileUpdate: baseUrl + 'api/profile/update',
    logout: baseUrl + 'api/logout',
    resendOtp: baseUrl + 'api/otp/resend',
    dashboardData: baseUrl + 'api/dashboard',
    rithmConnectionUpdate: baseUrl + 'api/rithmConnectionUpdate',
    vitalStore: pythonUrl,
  },

  make: function (url, method, params) {
    // console.log("apiclient", url, params);

    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    if (params?.authToken) {
      headers['Authorization'] = `Bearer ${params?.authToken}`
    }

    return fetch(url, {
      method,
      headers,
      body: JSON.stringify(params),
    }).then(response => response.json());

  },

  post: function (url, params) {
    return this.make(url, 'POST', params);
  },

  get: function (url, params) {
    // console.log("apiclient", url, params);
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    if (params.authToken) {
      headers['Authorization'] = `Bearer ${params.authToken}`
    }
    return fetch(url, {
      method: 'GET',
      headers,
    }).then(response => response.json())
      .catch(error => {
        // console.log('api client-------->', error);
        return {
          success: false,
          message: error?.message || error || 'Something went wrong!',
        };
      })
  },
};

export default apiClient;
