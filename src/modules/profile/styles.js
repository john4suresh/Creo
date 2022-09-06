import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { Text, Container as NativeContainer } from 'native-base';
import { colors } from '../../styles';
import _ from 'lodash';
import { isThemeObject } from '../../utils/validate';

export const Container = styled(LinearGradient).attrs(props => {
  return {
    colors: isThemeObject(props.theme)
      ? ['#19191B', '#19191B']
      : ['#F2F6FF', '#B7D8FF'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    angle: 180,
    useAngle: isThemeObject(props.theme) ? false : true,
  };
})`
  flex: 1;
  padding: 10px;
  padding-bottom:70
`;

export default StyleSheet.create({
  listItemContainer: {
    backgroundColor: '#ECF1FE',
    borderColor: '#8698C3',
  },
  listItemContainerDark: {
    backgroundColor: '#27292C',
    borderColor: '#999999',
  },
  labelStyle: {
    color: colors.blue,
  },
  labelStyleDark: {
    color: colors.yellow,
  },
});
