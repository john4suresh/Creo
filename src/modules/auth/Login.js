import React from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, Text, } from 'react-native';
import { colors, } from '../../styles'
import styles, {
  Container,
  LabelText,
} from './styles';

const Login = ({
  navigation
}) => {

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} translucent={true} />
      <View style={{ height: 50, }} />
      <Text>Login Screen</Text>
    </Container>
  )
};

export default connect(
  state => {
    return {
    };
  }, {
}
)(Login);