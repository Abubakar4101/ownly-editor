import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { mobileAndLandscape, landscapeOnly } from 'hooks/breakspoints';

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
    [theme.breakpoints.down(700)]: {
      marginLeft: '80px',
    },
    [mobileAndLandscape]: {
      justifySelf: 'flex-start',
      minWidth: '460px',
      width: '720px',
      borderRadius: '0px',
    },
    '&.isSubMenu': {
      width: '780px',
      height: '90px',
      padding: '0px',    
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
    [landscapeOnly] : {
      transform: 'rotate(-90deg)'
    }
  },
  secondaryColor: {
    color: ` ${theme.palette.secondary}`,
  }, 
  moreButton:{
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: 'white !important',
    fontSize: '40px !important',
    cursor: 'pointer',
  },
}));
