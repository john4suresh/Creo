import { Dimensions, Platform, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getUniqueId, isTablet } from 'react-native-device-info';

const getDeviceData = function () {
  const deviceType = DeviceInfo.isTablet() ? 'TABLET' : 'MOBILE';

  const deviceUid = getUniqueId();

  const window = Dimensions.get('screen');
  const width = window.width * window.scale;
  const height = window.height * window.scale;
  const resolution = parseInt(width) + 'x' + parseInt(height);

  const density = PixelRatio.get() * 160;
  const x = Math.pow(parseFloat(width) / density, 2);
  const y = Math.pow(parseFloat(height) / density, 2);
  const screenSize = Math.sqrt(x + y).toPrecision(2);

  const deviceModel = DeviceInfo.getModel();

  const OSVersion = DeviceInfo.getSystemVersion();

  let platform = Platform.OS.toUpperCase();
  if (platform !== 'ANDROID' && platform !== 'IOS') {
    platform = 'UNKNOWN';
  }

  return {
    deviceType,
    deviceUid,
    resolution,
    screenSize,
    deviceModel,
    OSVersion,
    platform,
  };
};

export default function getDeviceInfo() {
  return getDeviceData();
}

export const getVersionDetails = () => {
  const versionCode = DeviceInfo.getBuildNumber();
  const versionName = DeviceInfo.getVersion();
  return { versionName, versionCode };
};
