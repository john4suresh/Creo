import { StyleSheet, StatusBar, View, Dimensions } from 'react-native';

import styled from 'styled-components';
import { fonts } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import { Text, Container as NativeContainer } from 'native-base';

export const Container = styled(View)`
flex: 1;
justify-content:center;
align-items:center;
`

export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 0.5,
  },
  image: {
    width: (Dimensions.get('window').width * 0.8),
    height: '100%',
  },
  inputContainer: {},
  inputStyle: {
    marginVertical: 10,
  }
});
