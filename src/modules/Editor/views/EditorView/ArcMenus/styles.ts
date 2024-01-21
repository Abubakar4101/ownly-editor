import {makeStyles} from '@mui/styles';

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
  arcMenu: {
    paddingTop: '80px',
    paddingBottom: '80px',
    width: '300px',
    height: '595px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (min-height: 601px) and (max-height: 800px)': {
      height: '300px',
      paddingTop: '40px',
      paddingBottom: '40px',
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
