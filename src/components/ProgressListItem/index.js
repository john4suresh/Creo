import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { fonts } from '../../styles';

const ProgressListItem = (props) => {
  const { title = "", subTitle = "" } = props;

  const width = Dimensions.get('window').width * 0.2;

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{
        color: '#000000',
        fontFamily: fonts.primaryBold,
        fontSize: 16,
        lineHeight: 20,
      }}>August 2022</Text>
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
        <View style={{
          borderWidth: 5,
          width: width,
          height: width,
          borderRadius: width,
          borderColor: '#1773EF',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 16,
            color: '#000000',
            fontFamily: fonts.primaryBold
          }}>26</Text>
          <Text style={{
            fontSize: 10,
            color: '#000000',
            fontFamily: fonts.primaryBold
          }}>DaysPresent</Text>
        </View>

        <View style={{}}>
          <View>
            <Text style={{
              color: '#1773EF',
              fontFamily: fonts.primaryBold,
              fontSize: 16,
              lineHeight: 20
            }}>Total Working days</Text>
            <Text style={{
              color: '#000000',
              fontFamily: fonts.primaryBold,
              fontSize: 12,
              lineHeight: 16
            }}>28 Days</Text>
          </View>
          <View>
            <Text style={{
              color: '#1773EF',
              fontFamily: fonts.primaryBold,
              fontSize: 16,
              lineHeight: 20
            }}>Official Leaves</Text>
            <Text style={{
              color: '#000000',
              fontFamily: fonts.primaryBold,
              fontSize: 12,
              lineHeight: 16
            }}>4 Days</Text>
          </View>
        </View>
        <View>

        </View>
      </View>
    </View>

  )
}

export default ProgressListItem;