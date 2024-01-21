/* eslint-disable no-dupe-keys */
import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme: any) => ({
  switchWrraper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  canvas: {
    '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
    'touch-action': 'none',
    'webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
    outline: 'none',
    // '-webkit-tap-highlight-color': 'transparent',
  },
}));
