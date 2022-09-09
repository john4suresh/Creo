import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { VStack, HStack, Icon, Divider, ScrollView } from 'native-base';
import Attendance from "./images/attendance.svg";
import Behaviour from "./images/behaviour.svg";
import Activity from "./images/activity.svg";
import Circulars from "./images/circulars.svg";
import DailyTests from "./images/dailytests.svg";
import Messages from "./images/messages.svg";
import TimeTable from "./images/timetable.svg";
import HomeWorks from "./images/homeworks.svg";
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

const Reports = () => {
  const width = Dimensions.get('window').width * 0.125
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <VStack space={3} style={{}}>
          <HStack justifyContent="space-between">
            <IconGroup title="Attendance" icon={<Attendance width={width} height={width} />} />
            <IconGroup title="Home Works" icon={<HomeWorks width={width} height={width} />} />
            <IconGroup title="Behaviour" icon={<Behaviour width={width} height={width} />} />
          </HStack>
          <HStack justifyContent="space-between">
            <IconGroup title="Daily Tests" icon={<DailyTests width={width} height={width} />} />
            <IconGroup title="Activity" icon={<Activity width={width} height={width} />} />
            <IconGroup title="Circulars" icon={<Circulars width={width} height={width} />} />
          </HStack>
          <HStack justifyContent="space-between">
            <IconGroup title="Messages" icon={<Messages width={width} height={width} />} />
            <IconGroup title="Time table" icon={<TimeTable width={width} height={width} />} />
            <IconGroup title="Behaviour" icon={<Behaviour width={width} height={width} />} />
          </HStack>

        </VStack>
        <Divider style={{ marginVertical: 30 }} />
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{
              color: '#000000',
              fontFamily: fonts.primaryBold,
              fontSize: 16,
              lineHeight: 20
            }}>Events on August 9, 2022</Text>
            <Text
              style={{
                color: '#000000',
                fontFamily: fonts.primaryBold,
                fontSize: 14,
                lineHeight: 18,
                borderBottomWidth: 1
              }}
            >View All</Text>
          </View>
          <View>
            {EventsData.map(obj => <ListItem key={obj.id} title={obj.title} subTitle={obj.subTitle} />)}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Reports;

const IconGroup = props => {
  const { title, icon, onPress = () => { } } = props
  return <TouchableOpacity style={{
    justifyContent: 'center',
    alignItems: 'center'
  }}
    onPress={onPress}
    activeOpacity={1}
  >
    <View>
      {icon}
    </View>
    <View style={{ marginTop: 10 }}>
      <Text style={{
        color: '#000000',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: fonts.primaryRegular,
      }}>{title}</Text>
    </View>
  </TouchableOpacity>
}