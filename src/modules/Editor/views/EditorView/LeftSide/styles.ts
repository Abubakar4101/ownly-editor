import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { Translate } from '@mui/icons-material';
import { landscapeOnly, mobileAndLandscape } from 'hooks/breakspoints';

export const useStyles = makeStyles((theme: Theme) => ({
  rightSideWrapper: {
    width: '375px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // minWidth: '330px',
    maxWidth: '24vw',
    maxHeight: '100%',
    minHeight: '90%',
    // margin: '0px 1vw',
    height: '100%',
    transition: 'visibility 0s, opacity 0.5s linear',
    '&.uploadMenu': {
      // maxHeight: '50vh',
      // minHeight: '43vh',
      // width: '100%',
    },
    // padding: '16px',
    [landscapeOnly]: {
      width: '690px',
      // minWidth: '330px',
      maxWidth: '100vw',
      maxHeight: '85vh',
      minHeight: '85vh',
      position: 'absolute',
      top: '57%',
      left: '50%',
      zIndex: 100,
      transform: 'translate(-50%, -50%)'
    },
    [theme.breakpoints.down(700)]: {
      width: '375px',
      // minWidth: '330px',
      maxWidth: '90vw',
      maxHeight: '60%',
      minHeight: '60%',
      // margin: '0px 1vw',
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: 99,
      transform: 'translate(-50%, -50%)'
    }
  },
  boxWrapper: {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 5px 4px 0px #8783E140',
    background: `linear-gradient(0deg, #282729, #282729)`,
    borderRadius: '5px',
    // display: 'flex',
  },
  imagesListWrapper: {
    margin: '0px',
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    height: '70vh',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: 5,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[800],
      borderRadius: 20,
    },
  },
  translateAnimation: {
    [mobileAndLandscape]: {
      animation: '$translateAnimation 1s ease-in-out',
    }
  },

  '@keyframes translateAnimation': {
    '0%': {
      top: '100%',
    },
    '100%': {
      top: '57%',
    },
  },

}));
