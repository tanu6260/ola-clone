import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  orange: 'rgba(252, 49, 42, 1)',
  orange2: ' rgba(255, 6, 6, 0.73)',
  orange3: '#FD661F',
  orange4: '#FF764B3D',
  orange5: '#FF7E5C',
  light: 'rgba(231, 99, 8, 0.2)',
  primary: 'rgba(8, 91, 255, 1)',
  primary2: 'rgba(54, 55, 149, 1)',
  green: '#187618',
  red: 'red',
  white: '#FFFFFF',

  // black
  black: '#111111',
  black3: '#000000',
  black1: 'rgba(100, 100, 100, 1)',
  black25: 'rgba(0, 0, 0, 0.25)',
  black2: 'rgba(68, 68, 68, 1)',
  // blue

  blue: '#1080E9',
  blue2: '#085BFF',
  lightblue: 'rgba(157, 189, 250, 0.31)',
  blue3: '#3398FF',
  skyblue: '#E5EBFC',
  blue3: '#9DBDFA4F',
  blue4: '#363795',
  blue5: ' #E9ECF1',
  blue6: '#170969',
  blue7: '#085BFF1A',

  // grey
  gray: '#616161',

  gray1: 'rgba(101, 98, 98, 1)',
  grey2: 'rgba(101, 101, 101, 1)',
  grey3: 'rgba(0, 0, 0, 0.6)',
  grey4: '#9496A1',
  grey5: ' #D1D8E1',
  grey6: '#1111114D',
  gray10: '#f8f8f8',


  // lightGray
  lightGray: '#C1C1C1',
  lightGray2: 'rgba(118, 118, 128, 0.12)',
  lightGray1: '#DDDDDD',

  // yellow
  yellow: '#FFC107',

  // green

  green10: 'rgba(30, 125, 40, 1)',
  green1: 'rgba(71, 183, 43, 1)',
  green2: '#00BF5F',
  green30: '#3CAA20',
  //Brown

  lightBrown: '#7B6666CC',

  //pink
  pink: '#FF3194',
  pink1: '#FF31B9',
  pink2: '#D9D9D900',

  //
  lighyellow: '#FFD1A7',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding1: 15,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: width * 0.05,
  h3: width * 0.038,
  h4: width * 0.036,
  h5: width * 0.032,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  //Font family
  black: 'Poppins-Black-900',
  bold: 'Poppins-Bold-700',
  semiBold: 'Poppins-SemiBold-600',
  medium: 'Poppins-Medium-500',
  regular: 'Poppins-Regular-400',
  light: 'Poppins-Light-300',
  thin: 'Poppins-Thin-250',

  fourHundred: {fontFamily: 'Poppins-Regular-400'},
  fiveHundred: {fontFamily: 'Poppins-Medium-500'},
  sixHundred: {fontFamily: 'Poppins-SemiBold-600'},
  sevenHundred: {fontFamily: 'Poppins-Bold-700'},
  eightHundred: {fontFamily: 'Poppins-ExtraBold-800'},
  nineHundred: {fontFamily: 'Poppins-Black-900'},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
