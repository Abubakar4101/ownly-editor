import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  sidesFooterWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '45%',
    alignItems: 'center',
    // backgroundColor: theme.palette.primary.dark,
    borderRadius: '32px',
    // border: `1px solid ${theme.palette.grey[100]}`,
    minWidth: '400px',
    minHeight: '125px',
    padding: '12px 14px',
    marginBottom: '.5em',
    pointerEvents: 'all',
    '&.text': {
      height: '64px',
      minHeight: '0px',
    },
  },
}));
