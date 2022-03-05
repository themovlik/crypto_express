import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

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
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  buttonWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
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
  notransationWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transationText: {
    ...FONTS.smallTitle,
    color: COLORS.gray,
  },
});
