import { StyleSheet, Platform, Dimensions } from 'react-native';

import styled from 'styled-components';

const { width, height } = Dimensions.get('window');

export const InputLabel = styled.Text`
  font-family: Gordita-Medium;
  font-size: 12px;
  text-align: left;
  color: #32545a;
  ${Platform.OS == 'ios' ? 'padding-top: 10px' : ''}
  ${props => props.style}
`;

export const InputHelperText = styled.Text`
  font-family: Gordita-Medium;
  font-size: 10px;
  text-align: left;
  color: #32545a;
  opacity: 0.7;
  ${Platform.OS == 'ios' ? 'padding-top: 10px' : ''}
  ${props => props.style}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 50px;
  font-family: Gordita-Regular;
  padding-left: 14px;
  font-size: 14px;
  color: #01272f;
  overflow: hidden;
  border-radius: 16px;
  ${props => props.style}
`;

export const TextInputContainer = styled.View`
  background: #ffffff;
  box-shadow: 0px 15px 50px rgba(39, 40, 73, 0.1);
  border-radius: 16px;
  height: 50px;
  margin-top: 10px;
  font-family: Gordita-Regular;
  elevation: 12;
  flex-direction: row;
  align-items: center;
  ${props => props.style}
`;

export default StyleSheet.create({
  leftActionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 20,
  },
  leftActionVerticalCenter: {},
  rightActionContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  rightActionVerticalCenter: {},
  dualLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    width: width * 0.045,
    height: width * 0.045,
  },
  tooltip: {
    width: width - 40,
    position: 'absolute',
    left: 20,
    backgroundColor: '#fff',
    elevation: 5,
    height: 85,
  },
  tooltipContainer: {
    width: '100%',
    padding: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tooltipContent: {
    marginRight: 20,
  },
  tooltipHeader: {
    fontFamily: 'Gordita-Regular',
    fontSize: 12,
    color: '#01272F',
    marginBottom: 5,
  },
  tooltipText: {
    fontFamily: 'Gordita-Regular',
    fontSize: 10,
    color: '#01272F',
    opacity: 0.85,
  },
  tooltipClose: {
    width: width * 0.03,
    height: width * 0.03,
  },
});
