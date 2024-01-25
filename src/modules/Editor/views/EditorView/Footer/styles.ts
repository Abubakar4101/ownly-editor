import zIndex from '@mui/material/styles/zIndex';
import { makeStyles } from '@mui/styles';
import { landscapeOnly, mobileAndLandscape } from 'hooks/breakspoints';

export const useStyles = makeStyles((theme: any) => ({
  footer: {
    backgroundColor: '##ff000000',
    position: 'fixed',
    right: '5vw',
    left: '5vw',
    bottom: '0px',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '.65em',
    pointerEvents: 'none',
    [mobileAndLandscape]: {
      alignItems: 'flex-end',

    },
  },
  infoBut: {
    borderRadius: '16px !important',
    margin: '8px !important',
  },
  infoWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '1em',
  },
  priceWrapper: {
    display: 'flex',
    alignContent: 'space-between',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '237px',
    minHeight: '90px',
    backgroundColor: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: '0px 0px 20px 20px',
    pointerEvents: 'all',
  },
  priceText: {
    color: theme.palette.secondary.main,
    fontSize: '12px !important',
  },
  priceValue: {
    color: theme.palette.secondary.main,
    fontSize: '13px !important',
  },
  '@keyframes leftSlide': {
    from: {
      transform: 'translate(-100%, 0)',
    },
    to: {
      transform: 'translate(0, 0)',
    },
  },
  '@keyframes bottomSlide': {
    from: {
      transform: 'translate(0, 100%)',
    },
    to: {
      transform: 'translate(0, 0)',
    },
  },
  bottomMenuWrapper: {
    [mobileAndLandscape]: {
      overflowX: 'scroll',
      overflowY: 'hidden',
    },
    [landscapeOnly]: {
      position: 'absolute',
      transform: 'rotate(90deg)',
      top: '2vh',
      right: '-20vw'
    }
  },
  leftBottom: {
    [mobileAndLandscape]: {
      backgroundColor: '#282729',
      height: '90px',
      border: '1px solid #707070',
      padding: '10px',
      transform: 'translate(0, 0)',
      cursor: 'pointer',
      pointerEvents: 'all',
      transformOrigin: 'left center',
      animation: '$leftSlide 1s ease-in-out',
    },
  },
  bottomLeftPic: {
    [landscapeOnly]: {
      transform: 'rotate(-90deg)',
    },
    pointerEvents: 'none',
  },
  actionMenu: {
    [mobileAndLandscape]: {
      pointerEvents: 'none',
      transform: 'translate(0, 0)',
      transformOrigin: 'bottom center',
      animation: '$bottomSlide 1.5s ease-in-out',
    },
    [landscapeOnly]: {
      width: '34vw'
    }
  }
}));
