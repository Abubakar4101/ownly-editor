import merge from 'lodash.merge';
import {createTheme} from '@mui/material/styles';
// import { useSelector } from 'react-redux';
import typography from './Typography';
import components from './Override';
import shadows from './Shadows';
import INIT_STATE, {ThemeColors} from 'shared/globalTheme/themeConfig';

const SidebarWidth = 265;
const TopbarHeight = 55;

const baseTheme = {
  direction: 'ltr',
  palette: {
    primary: {
      main: '#1a97f5',
      light: '#e6f4ff',
      dark: '#1682d4',
    },
    secondary: {
      main: '#1e4db7',
      light: '#ddebff',
      dark: '#173f98',
    },

    success: {
      main: '#00c292',
      light: '#ebfaf2',
      dark: '#00964b',
      contrastText: '#ffffff',
    },
    danger: {
      main: '#e46a76',
      light: '#fdf3f5',
    },
    info: {
      main: '#0bb2fb',
      light: '#a7e3f4',
    },
    error: {
      main: '#e46a76',
      light: '#fdf3f5',
      dark: '#e45a68',
    },
    warning: {
      main: '#fec90f',
      light: '#fff4e5',
      dark: '#dcb014',
      contrastText: '#ffffff',
    },
    text: {
      secondary: '#777e89',
      danger: '#fc4b6c',
    },
    grey: {
      A100: '#ecf0f2',
      A200: '#99abb4',
      A400: '#767e89',
      A700: '#e6f4ff',
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hoverOpacity: 0.02,
      hover: 'rgba(0, 0, 0, 0.03)',
    },
  },

  shape: {
    borderRadius: 5,
  },
  mixins: {
    toolbar: {
      color: '#949db2',
      '@media(min-width:1280px)': {
        minHeight: TopbarHeight,
        padding: '0 30px',
      },
      '@media(max-width:1280px)': {
        minHeight: '64px',
      },
    },
  },
  status: {
    danger: '#e53e3e',
  },
  components,
  typography,
  shadows,
};

const themesOptions = [
  {
    name: ThemeColors.BLUE_THEME,
    palette: {
      primary: {
        main: '#1a97f5',
        light: '#e6f4ff',
        dark: '#1682d4',
      },
      secondary: {
        main: '#1e4db7',
        light: '#ddebff',
        dark: '#173f98',
      },
    },
  },
  {
    name: ThemeColors.GREEN_THEME,
    palette: {
      primary: {
        main: '#00cec3',
        light: '#d7f8f6',
        dark: '#02b3a9',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#066a73',
      },
    },
  },
  {
    name: ThemeColors.PURPLE_THEME,
    palette: {
      primary: {
        main: '#7352ff',
        light: '#e5e0fa',
        dark: '#5739d6',
      },
      secondary: {
        main: '#402e8d',
      },
    },
  },
  {
    name: ThemeColors.INDIGO_THEME,
    palette: {
      primary: {
        main: '#1e4db7',
        light: '#e6f4ff',
        dark: '#0c399e',
      },
      secondary: {
        main: '#11397b',
      },
    },
  },
  {
    name: ThemeColors.ORANGE_THEME,
    palette: {
      primary: {
        main: '#03c9d7',
        light: '#e5fafb',
        dark: '#05b2bd',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#fb9678',
        light: '#fcf1ed',
        dark: '#e67e5f',
        contrastText: '#ffffff',
      },
    },
  },
  {
    name: ThemeColors.RED_THEME,
    palette: {
      primary: {
        main: '#ff5c8e',
        light: '#fce6ed',
        dark: '#d43653',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#5e244d',
      },
    },
  },
  {
    name: ThemeColors.BLACK_THEME,
    palette: {
      primary: {
        main: '#8783E1',
        light: '#CACCD2',
        dark: '#282729',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#CACCD2',
      },
      background: {
        default: '#424044',
        paper: '#282729',
      },
      grey: {
        100: '#707070',
        200: '#fff',
      },
    },
  },
];

export const buildTheme = (config = {}) => {
  let themeOptions = themesOptions.find(theme => theme.name === config.theme);
  // const customizer = useSelector(state => state.CustomizerReducer);

  const baseMode = {
    palette: {
      mode: INIT_STATE.activeMode,
      background: {
        default: INIT_STATE.activeMode === 'dark' ? '#20232a' : '#fafbfb',
        dark: INIT_STATE.activeMode === 'dark' ? '#1c2025' : '#ffffff',
        paper: INIT_STATE.activeMode === 'dark' ? '#282C34' : '#ffffff',
      },
      text: {
        primary: INIT_STATE.activeMode === 'dark' ? '#e6e5e8' : 'rgba(0, 0, 0, 0.87)',
        secondary: INIT_STATE.activeMode === 'dark' ? '#adb0bb' : '#777e89',
      },
    },
  };

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  const theme = createTheme(
    merge({}, baseTheme, baseMode, themeOptions, {
      direction: config.direction,
    }),
  );
  // {
  //   ...baseTheme,
  //   ...baseMode,
  //   ...themeOptions,
  //   direction: config.direction,
  // }

  return theme;
};

export {TopbarHeight, SidebarWidth, baseTheme};
