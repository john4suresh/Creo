import React from 'react'
import { connect } from 'react-redux';
import { View, StyleSheet, Dimensions, StatusBar, TouchableOpacity, Animated, Pressable, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, Center, useColorModeValue } from 'native-base';
import { Header, HorizontalDatePicker } from '../../../components';
import { Container } from '../styles';
import { fonts } from '../../../styles';
import Reports from '../Reports';
import Events from '../Events';

const initialLayout = {
  width: Dimensions.get('window').width
};

const HomeWork = ({ navigation }) => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'update',
      title: 'Update'
    },
    {
      key: 'monthly',
      title: 'Monthly'
    },
    {
      key: 'events',
      title: 'Events'
    },
  ]);

  const renderTabBar = props => {
    return <View style={{
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: 'rgba(112, 112, 112, 0.3)',
      marginHorizontal: 15
    }}>
      <Box flexDirection="row"
        style={{ width: Dimensions.get('window').width * 0.90, justifyContent: 'center', alignItems: 'center', }}
      >
        {props.navigationState.routes.map((route, i) => {
          const color = index === i ? '#1571EC' : '#000000'
          const borderColor = index === i ? '#1571EC' : '#FFFFFF';
          return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
            <Pressable onPress={() => {
              console.log(i);
              setIndex(i);
            }}>
              <Animated.Text style={{
                color,
                fontSize: 18,
                lineHeight: 22,
                fontFamily: fonts.primaryRegular
              }}>{route.title}</Animated.Text>
            </Pressable>
          </Box>;
        })}
      </Box>
    </View>;
  };

  const UpdateRoute = () => <View style={{ flex: 1, padding: 20 }}>
    <Reports navigation={navigation} showEvents={false} />
  </View>;

  const MonthlyRoute = () => <View style={{ flex: 1, padding: 20 }}>
    <Reports navigation={navigation} />
  </View>;

  const EventRoute = () => <View style={{ flex: 1, padding: 20 }}>
    <Events navigation={navigation} />
  </View>;

  const renderScene = SceneMap({
    update: UpdateRoute,
    monthly: MonthlyRoute,
    events: EventRoute,
  });

  return (
    <Container>
      <View style={{ flex: 1, }}>
        <Header />
        <HorizontalDatePicker />
        <View style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }} >
          <TabView
            navigationState={{
              index,
              routes
            }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
              marginTop: StatusBar.currentHeight,
            }} />
        </View>
      </View>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
  };
};

const mapStateToDispatch = () => {
  return {
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(HomeWork);
