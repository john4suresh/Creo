import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Dimensions } from 'react-native';
import { colors } from '../../styles';
import styles, { Container } from './styles';
import { isDarkMode } from '../../utils/validate';
import { HomeHeader, Text, CurrentValueBox, Table } from '../../components';
import { LineChart } from "react-native-chart-kit";

function* yLabel() {
  yield* ['50', '70', '90', '110', '130', '150', '170', '190'];
}

const SkinTemperature = ({ navigation }) => {
  const isDarkModeValue = isDarkMode();

  const yLabelIterator1 = yLabel();

  const chartConfig = (dark) => ({
    backgroundColor: dark ? '#27292C' : '#ECF1FE',
    backgroundGradientFrom: dark ? '#27292C' : '#ECF1FE',
    backgroundGradientTo: dark ? '#27292C' : '#ECF1FE',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => dark ? `rgba(5, 37, 66, ${opacity})` : `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) =>
      dark ? `rgba(255, 242, 172, ${opacity})` : `rgba(44, 107, 201, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '5',
      strokeWidth: '2',
      stroke: dark ? '#FFD90B' : '#7095EC',
    },
    fillShadowGradientFrom: '#F93C3C',
    fillShadowGradientTo: dark ? '#FFD90B' : '#AFC4F8',
    fillShadowGradientFromOpacity: '0.6'
  })

  return (
    <View style={styles.container}>
      <View>
        <HomeHeader title="Skin Temperature" onBack={() => { navigation.goBack() }} />
      </View>
      <Container theme={isDarkModeValue}>
        <ScrollView>
          <CurrentValueBox value={40.6} />
          <Table average={"40.6 "} peakValue={"49.8"} offPeakValue={"38.6"} />
          <View
            style={styles.chartContainer(isDarkModeValue)}>
            <View style={styles.chartLabelContainer}>
              <Text
                bold
                type="h3"
                style={styles.chartLabel(isDarkModeValue)}>
                Heart Rate(bpm)
              </Text>
            </View>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                  {
                    data: [65, 150, 80, 85, 80, 90, 95],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 40} // from react-native
              height={220}
              // yAxisInterval={20} // optional, defaults to 1
              formatYLabel={() => yLabelIterator1.next().value}
              chartConfig={chartConfig(isDarkModeValue)}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              bezier={true}
              withVerticalLines={true}
            />
          </View>
        </ScrollView>
      </Container>
    </View>
  );
};

export default SkinTemperature;
