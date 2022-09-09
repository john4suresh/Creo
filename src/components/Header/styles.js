import { StyleSheet } from 'react-native';
import { fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: fonts.primaryBold,
    color: 'white'
  },
  subLabel: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: fonts.primaryBold,
    color: 'white',
  }
})