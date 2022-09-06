import React, { useEffect, useState, useRef, } from 'react';
import { connect } from 'react-redux';

import { View, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { colors, dimens } from '../../styles';
import styles, { LabelText, Container } from './styles';
import { Stack } from 'native-base';
// import { HomeCard, HomeCard2, HomeCard3, HomeCard4 } from './HomeCard';
import HeartRate from './images/heart_rate.svg';
import BloodPressure from './images/blood_pressure.svg';
import Spo2 from './images/spo2.svg';
import SkinTemp from './images/temp.svg';
import Caution from './images/caution.svg';
// import { HomeHeader } from '../../components';
// import { isDarkMode } from '../../utils/validate';
import WebView from 'react-native-webview';
import {
  LineChart,
} from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#ECF1FE",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ECF1FE",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `#2C6BC9`,
  strokeWidth: 0, // optional, default 3
  barPercentage: 0.5,
  propsForDots: {
    r: "0",
    strokeWidth: "0",
    stroke: "#ECF1FE"
  },
  useShadowColorFromDataset: false // optional
};

const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const HomeView = ({
  vitalsData,
  ecgData,
  navigation,
}) => {
  const [skinTemp, setSkinTemp] = useState({
    scale: 'c',
    value: 40.6
  })

  // let data = (vitalsData?.data || []);
  //0 to 250
  // let data = [523, 528, 527, 534, 535, 539, 536, 532, 524, 519, 515, 508, 510, 503, 505, 503, 504, 502, 505, 504, 504, 505, 504, 506, 503, 507, 503, 507, 506, 506, 506, 510, 507, 506, 510, 506, 510, 507, 509, 509, 510, 514, 512, 514, 514, 520, 516, 514, 509, 506, 507, 503, 507, 504, 508, 505, 497, 565, 620, 589, 513, 507, 508, 501, 503, 499, 502, 500, 501, 502, 504, 507, 505, 509, 513, 514, 517, 522, 525, 531, 531, 537, 534, 537, 530, 526, 515, 515, 509, 508, 505, 505, 506, 503, 506, 501, 505, 502, 503, 504, 508, 505, 506, 505, 510, 507, 509, 508, 512, 508, 511, 511, 511, 514, 511, 515, 511, 514, 511, 511, 510, 514, 512, 514, 514, 518, 513, 509, 500, 502, 497, 497, 495, 498, 491, 485, 526, 590, 608, 531, 488, 495, 498, 491, 492, 491, 495, 492, 495, 502, 500, 505, 503, 507, 510, 510, 516, 518, 527, 527, 532, 533, 534, 531, 523, 520, 508, 508, 502, 502, 499, 499, 501, 499, 505, 501, 506, 503, 507, 506, 507, 509, 507, 511, 507, 512, 509, 511, 510, 514, 511, 513, 509, 512, 509, 510, 509, 513, 509, 511, 510, 512, 514, 511, 517, 517, 523, 518, 516, 511, 515, 511, 511, 509, 512, 502, 506, 601, 622, 545, 499, 510, 510, 507, 504, 507, 508, 505, 508, 508, 511, 512, 511, 517, 515, 521, 520, 526, 528, 532, 537, 538, 545, 542, 543, 533, 528, 516, 517, 510];
  //250 to 750
  let data = [523, 528, 527, 534, 535, 539, 536, 532, 524, 519, 515, 508, 510, 503, 505, 503, 504, 502, 505, 504, 504, 505, 504, 506, 503, 507, 503, 507, 506, 506, 506, 510, 507, 506, 510, 506, 510, 507, 509, 509, 510, 514, 512, 514, 514, 520, 516, 514, 509, 506, 507, 503, 507, 504, 508, 505, 497, 565, 620, 589, 513, 507, 508, 501, 503, 499, 502, 500, 501, 502, 504, 507, 505, 509, 513, 514, 517, 522, 525, 531, 531, 537, 534, 537, 530, 526, 515, 515, 509, 508, 505, 505, 506, 503, 506, 501, 505, 502, 503, 504, 508, 505, 506, 505, 510, 507, 509, 508, 512, 508, 511, 511, 511, 514, 511, 515, 511, 514, 511, 511, 510, 514, 512, 514, 514, 518, 513, 509, 500, 502, 497, 497, 495, 498, 491, 485, 526, 590, 608, 531, 488, 495, 498, 491, 492, 491, 495, 492, 495, 502, 500, 505, 503, 507, 510, 510, 516, 518, 527, 527, 532, 533, 534, 531, 523, 520, 508, 508, 502, 502, 499, 499, 501, 499, 505, 501, 506, 503, 507, 506, 507, 509, 507, 511, 507, 512, 509, 511, 510, 514, 511, 513, 509, 512, 509, 510, 509, 513, 509, 511, 510, 512, 514, 511, 517, 517, 523, 518, 516, 511, 515, 511, 511, 509, 512, 502, 506, 601, 622, 545, 499, 510, 510, 507, 504, 507, 508, 505, 508, 508, 511, 512, 511, 517, 515, 521, 520, 526, 528, 532, 537, 538, 545, 542, 543, 533, 528, 516, 517, 510];


  let ecgRawData = ecgData.map(o => {
    let pts = (isJsonString(o.data) && o.data.includes('ecg')) ? JSON.parse(o.data) : '';
    // console.log('typeof---------->', typeof o.data, isJsonString(o.data), o.datas, pts);
    return pts.ecg;
  }).filter(o => o);

  // console.log('ecgRawData----------->', ecgRawData, );

  const webviewRef = useRef();
  // const isDarkModeValue = isDarkMode();

  const generateOnMessageFunction = (data) =>
    `(function() {
    window.dispatchEvent(new MessageEvent('message', {data: ${JSON.stringify(data)}}));
  })()`;

  const sendDataToWebView = (data) => {
    if (webviewRef?.current?.injectJavaScript) {
      webviewRef.current.injectJavaScript(generateOnMessageFunction(data));
    }
  }

  let concatHTML = `<!DOCTYPE HTML>
    <html>
    <head>
    <script>
    window.onload = function () {
      var xAxisStripLinesArray = [];
      var yAxisStripLinesArray = [];
      var dataPointsArray = [${data}];
      var dps = [];

      var color = "#EB0102";

    var chart = new CanvasJS.Chart("chartContainer", {
	    theme: "light2",
      zoomEnabled: false,
      title:{
        text:"ECG",
        horizontalAlign: "left",
        fontColor: color
      },
      subtitles:[{
        text: "",
        horizontalAlign: "left",
      }],
      axisY:{
        stripLines:yAxisStripLinesArray,
        gridColor: color,
        lineColor: color,
        gridThickness: 2,
        tickThickness: 0,
        labelFormatter: function(e){
          return "";
        }
      },
      axisX:{
        stripLines:xAxisStripLinesArray,
        gridColor: color,
        lineColor: color,
        tickThickness: 0,
        gridThickness: 2,
        labelFormatter: function(e){
          return "";
        }
      },
      data: [
        {
          type: "spline",
          color:"black",
          dataPoints: dps
        }
      ]
  });

    addDataPoints();
    //addStripLines();

    var updateCount = 0;
    var sliceCount = 150;

    function addDataPoints(){
      let dPts = dataPointsArray.slice(updateCount, (updateCount + sliceCount));
      updateCount = updateCount + sliceCount;
      for(var i = 0; i < dPts.length; i++){
        if(dps.length < 150) {
          dps.push({y: dPts[i]});
        } else {
          dps.shift();
        }
      }

      chart.options.title.text = "Update " + dps.length;
      chart.render();
      chart.axisX[0].set("interval", (chart.axisX[0].get("maximum") - chart.axisX[0].get("minimum"))/10, false); //Show 10 major grids in axisX
      chart.axisY[0].set("interval", (chart.axisY[0].get("maximum") - chart.axisY[0].get("minimum"))/5);  //Show 10 major grids in axisX
    }

    function addStripLines(chart){		
      //Adding StripLines
      for(var i = chart.axisY[0].minimum;i < chart.axisY[0].maximum;i = i+(chart.axisY[0].interval/10)){
        if(i%chart.axisY[0].interval != 0)
          yAxisStripLinesArray.push({value: i,thickness: 1, color: color});  
      }
      for(var i = chart.axisX[0].minimum;i < chart.axisX[0].maximum; i = i+(chart.axisX[0].interval/10)){
        if(i%chart.axisX[0].interval != 0)
          xAxisStripLinesArray.push({value: i,thickness: 1, color: color});  
      }
      chart.render();
    }

    addDataPoints();

    // setInterval(function(){addDataPoints()}, 500);
}
    </script>
    </head>
    <body>
    <div id="chartContainer" style="height: 100%; width:100%;"></div>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    </body>
    </html>`;

  // console.log('data------->', data);

  let dps = [];

  // for(var i = 0; i < data.length; i++){
  //       if(dps.length < 150) {
  //         dps.push(data[i]);
  //       } else {
  //         dps.shift();
  //       }
  //     }

  let dData = {
    // labels: ["5:00 AM", "5:01 AM", "5:02 AM", "5:03 AM", "5:04 AM", "5:05 AM"],
    datasets: [
      {
        data: ecgRawData,
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: [] // optional
  };


  return (
    <View style={styles.container}>
      <View>
        {/* <HomeHeader title="Home" home={true} /> */}
      </View>
      <Container theme={false}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20, }}
          showsVerticalScrollIndicator={false}>
          {data.length ?
            <>
              {/* <View style={{ height: 150, }}>
              <WebView
                // onLayout={this.reRenderWebView}
                style={styles.full}
                ref={webviewRef}
                scalesPageToFit={true}
                mixedContentMode="compatibility"
                source={{ html: concatHTML, baseUrl: 'web/' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scrollEnabled={false}
                automaticallyAdjustContentInsets={true}
              />
            </View> */}
              <View style={{}}>
                <ImageBackground
                  source={require('./images/graph_paper.png')}
                  style={{ borderRadius: 5, overflow: 'hidden' }}>
                  <LineChart
                    style={{ backgroundColor: 'transparent', paddingBottom: 10, paddingRight: 0, }}
                    data={dData}
                    width={dimens.width}
                    height={90}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    bezier={true}
                    withInnerLines={false}
                    withOuterLines={false}
                    withVerticalLines={false}
                    withHorizontalLines={false}
                    withShadow={false}
                    withDots={false}
                    withVerticalLabels={false}
                    withHorizontalLabels={false}
                  />
                </ImageBackground>
              </View>
            </>
            :
            null}
          <View style={{ marginHorizontal: 10, paddingTop: 20 }}>
            <Stack direction="row" space={3} style={{ marginBottom: 20 }}>
              {/* <HomeCard4
                title={'Heart Rate'}
                icon={<HeartRate />}
                value={vitalsData?.hr}
                subValue={'bpm'}
                onPress={() => { navigation.navigate('HeartRate') }}
              />
              <HomeCard2
                title={'Blood Pressure'}
                icon={<BloodPressure />}
                value={vitalsData?.ppg || ''}
                subValue={'mmHg'}
                onPress={() => { }}
              /> */}
            </Stack>
            <Stack direction="row" space={3}>
              {/* <HomeCard4
                title={'SpO2'}
                icon={<Spo2 />}
                value={vitalsData?.spo2 || ''}
                subValue={'%'}
                onPress={() => { }}
              />
              <HomeCard3
                title={'Skin Temp.'}
                icon={<SkinTemp />}
                value={skinTemp}
                setSkinTemp={setSkinTemp}
                valueC={'40.6'}
                valueF={'105.08'}
                icon2={<Caution />}
                onPress={() => { navigation.navigate('SkinTemperature') }}
              /> */}
            </Stack>
          </View>
        </ScrollView>
      </Container>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    rithmConnectionUpdate: state.home.rithmConnectionUpdate,
    vitalsData: state.home.vitalsData,
    ecgData: state.home.ecgData,
  };
};

const mapStateToDispatch = () => {
  return {
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(HomeView);
