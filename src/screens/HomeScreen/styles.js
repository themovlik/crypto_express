import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  titleText: {
    ...FONTS.bigTitle,
    color: COLORS.secondary,
    textTransform: 'capitalize',
  },
  mediumTitle: {
    ...FONTS.title,
    marginLeft: SIZES.margin * 2,
    color: COLORS.gray,
  },
  textwrapper: {
    alignItems: 'center',
    paddingVertical: 150,
  },
  textInput: {
    ...FONTS.placeHolder,
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  buttonWrapper: {
    marginTop: SIZES.margin * 5,
    marginHorizontal: SIZES.margin * 2,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
  },
  smallButton: {
    height: 20,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 5,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  buttonText: {
    ...FONTS.buttonText,
    color: COLORS.white,
    alignSelf: 'center',
  },
  notransationWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transationText: {
    ...FONTS.smallTitle,
    color: COLORS.gray,
  },
  transactionWrapper: {
    backgroundColor: 'orange',
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.margin * 2,
    marginTop: SIZES.margin,
    backgroundColor: COLORS.lightGray3,
  },
  transactionText: {
    ...FONTS.caption,
    color: COLORS.gray,
    width: '95%',
  },
});
