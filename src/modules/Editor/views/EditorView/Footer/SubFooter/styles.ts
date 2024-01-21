import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  subFooterWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '32px',
    border: `1px solid ${theme.palette.grey[100]}`,
    minWidth: '400px',
    minHeight: '80px',
    padding: '8px 14px',
    marginBottom: '.5em',
    '&.text': {
      height: '64px',
      minHeight: '0px',
    },
    '&.graphics': {
      height: '95px',
      minHeight: '0px',
    },
  },
  subFooter: {
    width: '684px',
    minHeight: '103px',
    // margin: '16px',
    // padding: '16px',
  },
  boxWrapper: {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 5px 4px 0px #8783E140',
    background: `linear-gradient(0deg, #282729, #282729)`,
    borderRadius: '5px',
  },
}));
