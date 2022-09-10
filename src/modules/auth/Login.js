import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, StatusBar, ImageBackground, Dimensions, Image } from 'react-native';
import { colors, } from '../../styles'
import styles, { Container } from './styles';
import { Input, FormControl, Button } from "native-base";

const Login = ({
  navigation
}) => {

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} translucent={true} />
      <ImageBackground source={require('./images/loginBackground.png')}>
        <View style={styles.innerContainer}>
          <View style={{ flex: 0.6 }}>
            <View style={{
              justifyContent: 'center'
            }}>
              <Image source={require('./images/logo.png')} style={styles.image} />
            </View>
          </View>
          <View style={{ flex: 1.2, justifyContent: 'flex-end', marginBottom: 30 }}>
            <View style={{ width: Dimensions.get('window').width * 0.85 }}>
              <Text style={{ fontSize: 30, fontFamily: '' }}>Login</Text>
              <View style={{ marginVertical: 10 }}>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input placeholder="Enter Email ID" variant="underlined" />
              </View>
              <View style={{ marginVertical: 10 }}>
                <FormControl.Label>Password</FormControl.Label>
                <Input placeholder="Enter Password" variant="underlined" />
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 15 }}>
                <Button style={{ backgroundColor: 'blue', width: '50%', marginBottom: 10 }}
                  onPress={() => navigation.navigate('HomeScreen')}
                >Login</Button>
                <Text>Request Login Access</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Container >
  )
};

export default connect(
  state => {
    return {
    };
  }, {
}
)(Login);