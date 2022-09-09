import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { VStack, HStack, Icon, Divider, ScrollView } from 'native-base';
import { fonts } from '../../../styles';
import { ListItem } from '../../../components';

const EventsData = [
  {
    id: 0,
    title: 'Personal Trainings',
    subTitle: '5th Class B Section'
  },
  {
    id: 1,
    title: 'Yoga',
    subTitle: '12th Class A Section'
  },
  {
    id: 2,
    title: 'Stretch',
    subTitle: '12th Class A Section'
  },
  {
    id: 3,
    title: 'Boxing',
    subTitle: '12th Class A Section'
  },

]

const Events = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{
              color: '#000000',
              fontFamily: fonts.primaryBold,
              fontSize: 16,
              lineHeight: 20
            }}>Events on August 9, 2022</Text>
          </View>
          <View>
            {EventsData.map(obj => <ListItem key={obj.id} title={obj.title} subTitle={obj.subTitle} />)}
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{
              color: '#000000',
              fontFamily: fonts.primaryBold,
              fontSize: 16,
              lineHeight: 20
            }}>Events on June 15, 2022</Text>
          </View>
          <View>
            {EventsData.map(obj => <ListItem key={obj.id} title={obj.title} subTitle={obj.subTitle} />)}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Events;