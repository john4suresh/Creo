import { StyleSheet } from 'react-native';
import { fonts, dimens, colors } from '../../styles';

export default StyleSheet.create({
  menuTitle: {
    marginLeft: 20,
    color: '#0B0B0B',
    fontFamily: fonts.primarySemiBold,
    fontSize: 12,
    textAlign: 'center',
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: colors.white,
    fontSize: 13,
    fontFamily: fonts.primarySemiBold,
  },
  divider: {
    borderBottomColor: '#00000019',
    borderBottomWidth: 0.5,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    width: '100%',
    height: dimens.width * 0.3,
    backgroundColor: colors.blue,
    marginTop: -10,
  },
  userLogo: {
    width: dimens.width * 0.2,
    height: dimens.width * 0.2,
    borderRadius: (dimens.width * 0.2) / 2,
  },
  icon: {
    width: dimens.width * 0.05,
    height: dimens.width * 0.05,
    resizeMode: 'contain',
  },
  appVersionText: {
    fontFamily: fonts.primarySemiBold,
    fontSize: 10,
    padding: 5,
    alignSelf: 'flex-end',
    color: colors.blue,
  },
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    bottom: Platform.OS === 'ios' ? -5 : 0,
    margin: 0,
    borderRadius: 5,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: '#FFFFFF',
  },
  tabBarIconFocusedDark: {
    tintColor: '#000000',
  },
});
