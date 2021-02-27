import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const really = {
  bodyText: '#2D2A26',
  red: '#d41367',
  yellow: '#ffd040',
  blue: '#36b0c9',
  black: '#2d2a26',
  grey: '#8e8c89',
  greyAlt: {
    base: '#607d8b',
    light: '#90a4ae',
  },
  titleBlack: '#263238',
  secondary: {
    c165: '#ff671d',
    purple: '#c028b9',
    c2725: '#655dc6',
    c285: '#0071ce',
    c3385: '#3bd4ae',
  },
};

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: '#36b0c9',
    // main: colors.indigo[500],
    light: colors.indigo[100],
  },
  secondary: {
    contrastText: white,
    dark: '#31808c',
    // dark: colors.blue[900],
    main: really.blue,
    // main: colors.blue.A400,
    light: colors.blue.A200,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: really.black,
    secondary: really.greyAlt.base,
    link: colors.blue[600],
  },
  icon: colors.blueGrey[600],
  background: {
    default: '#F4F6F8',
    paper: white,
  },
  divider: colors.grey[200],
  menu: '#051E48',
  really,
};
