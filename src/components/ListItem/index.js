import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { fonts } from '../../styles';
import RightArrow from "./rightArrow.svg";

const ListItem = (props) => {
  const { title = "", subTitle = "" } = props
  const width = Dimensions.get('window').width * 0.2;
  const arrowWidth = Dimensions.get('window').width * 0.045;
  return (
    <View style={{
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      elevation: 2,
      borderRadius: 20,
      marginVertical: 10
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{
          backgroundColor: '#8D8D8D',
          width: width,
          height: width,
          borderRadius: 20,
          marginRight: 20
        }}>
        </View>
        <View>
          <Text style={{
            color: '#000000',
            fontFamily: fonts.primaryBold,
            fontSize: 16,
            lineHeight: 20
          }}>{title}</Text>
          <Text style={{
            color: '#000000',
            fontFamily: fonts.primaryBold,
            fontSize: 12,
            lineHeight: 16
          }}>{subTitle}</Text>
        </View>
      </View>
      <View>
        <RightArrow width={arrowWidth} height={arrowWidth} />
      </View>
    </View>
  )
}

export default ListItem;