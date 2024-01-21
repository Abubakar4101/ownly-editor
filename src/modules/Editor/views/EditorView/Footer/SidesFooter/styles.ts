import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  sidesFooterWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '32px',

    bottom: 0,
    position: 'absolute',
    right: 0,
    width: '85px',
    '&.text': {
      // height: '64px',
      // minHeight: '0px',
    },
  },
}));
