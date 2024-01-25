import { Height } from '@mui/icons-material';
import {makeStyles} from '@mui/styles';
import { landscapeOnly, mobileAndLandscape } from 'hooks/breakspoints';

export const useStyles = makeStyles((theme: any) => ({
  '@keyframes rightfadeIn': {
    from: {
      opacity: 0,
      transform: 'scale(0.3) translate(-200px, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1) translate(0px, 0px)',
    },
  },
  '@keyframes leftfadeIn': {
    from: {
      opacity: 0,
      transform: 'scale(0.3) translate(200px, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1) translate(0px, 0px)',
    },

  },
  '@keyframes bottomSlide': {
    from: {
      bottom: -100,
    },
    to: {
      bottom: -35,
    },
  },
  arcMenu: {
    paddingTop: '80px',
    paddingBottom: '80px',
    width: '300px',
    height: '595px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [mobileAndLandscape]: {
      position: 'fixed',
      height: '300px',
      width: '300px',
      flexDirection: 'row',
      bottom: -35,
      transformOrigin: 'bottom center',
      animation: '$bottomSlide 0.5s ease-in-out',
    },
    [landscapeOnly]: {
      height: '300px',
      width: '200px',
      flexDirection: 'row',
      position: 'fixed',
      top: '-15vh',
      left: '90vw',
      transform: 'rotateZ(-90deg)',
      transformOrigin: 'bottom center',
      animation: '$bottomSlide 0.5s ease-in-out',
    },
    '@media (min-height: 1024px) and (max-height: 3000px)': {
      paddingTop: '40px',
      paddingBottom: '40px',
    },
    [theme.breakpoints.between('1400', '1601')]: {
      height: '415px',
      paddingTop: '60px',
      paddingBottom: '50px',
    },
    transformOrigin: 'left center',
    animation: '$rightfadeIn 0.5s ease-in-out',
  },
  moreButton:{
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: 'white !important',
    fontSize: '40px !important',
    position: 'fixed',
    bottom: -50,
    cursor: 'pointer',
  },
  
  leftArcMenu: {
    paddingTop: '59px',
    paddingBottom: '54px',
    width: '300px',
    height: '595px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    '@media (min-height: 601px) and (max-height: 800px)': {
      height: '300px',
      paddingTop: '22px',
      paddingBottom: '10px',
    },

    '@media (min-height: 1024px) and (max-height: 3000px)': {
      paddingTop: '22px',
      paddingBottom: '10px',
    },
    [theme.breakpoints.between('1400', '1601')]: {
      height: '415px',
      paddingTop: '40px',
      paddingBottom: '25px',
    },
    transformOrigin: 'right center',
    animation: '$leftfadeIn 0.5s ease-in-out',
  },
}));
