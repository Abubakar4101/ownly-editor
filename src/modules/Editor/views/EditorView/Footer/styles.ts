import { makeStyles } from '@mui/styles';

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
    [theme.breakpoints.down(700)]: {
      alignItems: 'flex-end',

    }
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
  leftBottom: {
    [theme.breakpoints.down(700)]: {
      backgroundColor: '#282729',
      height: '90px',
      border: '1px solid #707070',
      padding: '10px',
      transform: 'translate(0, 0)',
      cursor: 'pointer',
      pointerEvents: 'all',
      transformOrigin: 'left center',
      animation: '$leftSlide 1s ease-in-out',
    }
  },
  actionMenu:{
    [theme.breakpoints.down(700)]: {
      pointerEvents: 'none',
      transform: 'translate(0, 0)',
      transformOrigin: 'bottom center',
      animation: '$bottomSlide 1.5s ease-in-out',
    }
  }
}));
