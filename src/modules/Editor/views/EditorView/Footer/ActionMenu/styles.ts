import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  actionMenu: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '32px',
    border: `1px solid ${theme.palette.grey[100]}`,
    minWidth: '400px',
    padding: '10px 16px',
    width: '720px',
    height: '90px',
    pointerEvents: 'all',

    '&.isSubMenu': {
      width: '810px',
      height: '90px',
      padding: '0px',
      borderRadius: '225px 50px 50px 240px / 150px 25px 25px 137px',
      // background: `radial-gradient(120px at 0 120px, ${theme.palette.common.black} 98%, ${theme.palette.primary.dark} 0) 0 -120px`,
    },
    transition: 'width 0.5s ease-in-out', // Transition property for width
  },
  actionButton: {
    minWidth: '77px !important',
    margin: '0px 2px !important',
    '&.selected': {
      background: '#6561c24d !important',
      boxShadow: '0px 0px 15px 5px #6561C2 !important',
    },
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '4px',
    minWidth: '25px',
  },
  secondaryColor: {
    color: ` ${theme.palette.secondary}`,
  },
}));
