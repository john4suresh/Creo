import React, { useEffect, useState } from 'react';
import NativeHorizontalPicker from '@logisticinfotech/react-native-horizontal-date-picker';
import { View, Text } from 'react-native';
import Info from "./images/info.svg";
import Calender from "./images/calender.svg";
import { fonts } from "../../styles";
import moment from 'moment';
import { Divider } from 'native-base';

const HorizontalDatePicker = () => {

  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);


  const onDateSelected = date => {
    console.log("Selected Date:==>", date);
  }
  useEffect(() => {
    const month = moment().format('MMM');
    const year = moment().format('YYYY');
    setMonth(month);
    setYear(year);
  }, [])

  return (
    <View style={{ marginHorizontal: 10, }}>
      <Divider style={{ opacity: 0.3, borderWidth: 0.5, borderColor: '#FFFFFF', marginBottom: 10 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{
            color: '#ffffff',
            fontFamily: fonts.primaryBold,
            fontSize: 16,
            lineHeight: 22,
            marginRight: 10,
          }}>Select Date</Text>
          <Info width={15} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Calender width={15} />
          <Text style={{
            color: '#ffffff',
            fontFamily: fonts.primaryBold,
            fontSize: 16,
            lineHeight: 22,
            marginLeft: 10,
          }}>{month} {year}</Text>
        </View>
      </View>
      <NativeHorizontalPicker
        pickerType={'date'}
        onDateSelected={onDateSelected}
        isShowYear={false}
        minDate={new Date("2022-09-01")}
        maxDate={new Date("2022-09-30")}
        defaultSelected={new Date()}
        datePickerContainerStyle={{
          backgroundColor: 'transparent',
          marginHorizontal: 0
        }}
        selectedTextStyle={{
          backgroundColor: '#FFFFFF',
          color: '#135FEF'
        }}
        unSelectedTextStyle={{
          color: '#FFFFFF'
        }}
      />
      <Divider style={{ opacity: 0.3, borderWidth: 0.5, borderColor: '#FFFFFF', marginTop: 15 }} />
    </View>
  )
}

export default HorizontalDatePicker