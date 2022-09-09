import { StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components';
import { fonts } from '../../styles';
import { isThemeObject } from '../../utils/validate';

export const LabelText = styled.Text`
  font-family: ${fonts.primaryMedium};
  font-size: 14px;
  text-align: left;
  color: #32545a;
  opacity: 0.7;
  ${props => props.style}
`;

export const Container = styled(LinearGradient).attrs(props => {
  return {
    colors: ['#1D91EF', '#1259EF'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    angle: 90,
    useAngle: true,
  };
})`
  flex: 1;
`;

export const DeviceContainer = styled.View`
  background: #ECF1FE;
  border: 1px solid #8698C3;
  box-sizing: border-box;
  box-shadow: 0px 4px 5px rgba(28, 28, 28, 0.25);
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0px 5px 0px;
`;

export const DeviceName = styled.Text`
  font-family: ${fonts.primaryMedium};
  font-size: 20px;
  color: #103C7C;
  padding-left: 10px;
`;

export const ConnectButtonContainer = styled.TouchableOpacity`
  background: #2C6BC9;
  border-radius: 5px;
  padding: 5px;
  align-self: center;
  min-width: 60%;
  margin: 10px 5px 5px 5px;
`;

export const ConnectButtonText = styled.Text`
  font-family: ${fonts.primaryMedium};
  font-size: 20px;
  text-align: center;
  color: #ECF1FE;
`;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flexRow: {
    flexDirection: 'row',
  },
  full: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  chartContainer: dark => ({
    backgroundColor: dark ? '#27292C' : '#ECF1FE',
    marginVertical: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: dark ? '#999999' : '#8698C3',
    borderRadius: 5,
  }),
  chartLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartLabel: (dark) => ({
    color: dark ? '#FFF2AC' : '#0B3F8B',
    fontStyle: 'italic',
    fontWeight: 'bold',
  })
});
