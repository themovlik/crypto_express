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
  textwrapper: {
    alignItems: 'center',
    paddingVertical: 150,
  },
  textInput: {
    ...FONTS.placeHolder,
    marginHorizontal: SIZES.margin * 2,
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
  buttonText: {
    ...FONTS.buttonText,
    color: COLORS.white,
    alignSelf: 'center',
  },
});
