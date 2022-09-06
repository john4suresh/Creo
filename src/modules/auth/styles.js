import { StyleSheet } from 'react-native';

import styled from 'styled-components';
import { fonts } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import { Text, Container as NativeContainer } from 'native-base';

export const Container = styled(LinearGradient).attrs({
  colors: ['#F2F6FF', '#B7D8FF'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  angle: 180,
  useAngle: true,
})`
 flex: 1;
 padding: 10px;
 `;

export const DeviceContainer = styled(NativeContainer)`
  /* background: #ECF1FE; */
  border: 1px solid #8698C3;
  box-sizing: border-box;
  box-shadow: 0px 4px 5px rgba(28, 28, 28, 0.25);
  border-radius: 5px;
  padding: 10px;
  flex: 1;
  justify-content:center;
  align-items:center;
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

export const LabelText = styled(Text)`
  font-family: ${fonts.primaryMedium};
  font-size: 14px;
  /* color: #000000; */
  ${props => props.style}
`;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
});
