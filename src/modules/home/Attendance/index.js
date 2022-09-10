import React from 'react';
import { View, Text } from 'react-native';
import { Header, ProgressListItem } from '../../../components';
import { Container } from '../styles';
import { ScrollView } from 'native-base';

const Attendance = () => {
  return (
    <Container>
      <View style={{ flex: 1, }}>
        <Header />
        <View style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20
        }} >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginVertical: 20 }}>
              <ProgressListItem />
              <ProgressListItem />
              <ProgressListItem />
              <ProgressListItem />
              <ProgressListItem />
            </View>
          </ScrollView>
        </View>
      </View>
    </Container>
  )
}

export default Attendance;