import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#020306',
  secondary: '#A87E6F',
  white: '#FFFFFF',
  lightGreen: '#4BEE70',
  red: '#C10E0E',
  black: '#000000',
  gray: '#272833',
  lightgray: '#676870',
  lightGray2: '#A5A6AE',
  lightGray3: '#F7F7F7',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 20,
  padding: 24,
  margin: 10,

  // font sizes
  hugeTitle: 44,
  bigTitle: 30,
  title: 24,
  smallTitle: 20,
  caption: 13,
  body: 14,
  buttonText: 14,
  smallText: 12,
  inputs: 16,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  hugeTitle: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: SIZES.hugeTitle,
    lineHeight: 48,
  },
  bigTitle: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: SIZES.bigTitle,
    lineHeight: 32,
  },
  title: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: SIZES.title,
    lineHeight: 26,
  },
  smallTitle: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: SIZES.smallTitle,
    lineHeight: 22,
  },
  caption: {
    fontFamily: 'SourceSerifPro-Regular',
    fontSize: SIZES.caption,
    lineHeight: 18,
  },
  body: {
    fontFamily: 'SourceSerifPro-Regular',
    fontSize: SIZES.body,
    lineHeight: 20,
  },
  buttonText: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: SIZES.buttonText,
    lineHeight: 20,
  },
  smallText: {
    fontFamily: 'SourceSerifPro-Regular',
    fontSize: SIZES.smallText,
    lineHeight: 20,
  },
  inputs: {
    fontFamily: 'SourceSerifPro-SemiBold',
    fontSize: SIZES.inputs,
    lineHeight: 20,
  },
  placeHolder: {
    fontFamily: 'SourceSerifPro-Regular',
    fontSize: SIZES.inputs,
    lineHeight: 20,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
