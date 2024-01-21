import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme: any) => ({
  switchWrraper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  wrrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'normal',
    height: 'calc(100%)',
    width: 'calc(100%)',
    '&.printingTypes': {
      width: '40vw',
    },
  },
  bkWrrapper: {
    width: '100%',
    height: '100%',
    // marginTop: '4px',
    display: 'flex',
    alignItems: 'flex-start',
    background: '#ffffff00',
    justifyContent: 'center',
    position: 'absolute',
  },
  drawnWrrapper: {
    // border: '2px dashed #00000045',
    aspectRatio: '1 / 1.14',
    height: '100%',
    // background: 'linear-gradient(102.01deg, #FFFFFF -0.42%, rgba(255, 255, 255, 1) 102.23%)',
    // boxShadow: '0px 0px 15px 5px #6561C2 !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvasWrrapper: {
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  sideWrapper: {
    // width: '100%',
    height: '100%',
    // margin: 'auto',
    background: '#ffffff00',
    position: 'relative',
  },
  dragging: {
    borderStyle: 'dashed',
    borderColor: '#39a1c9 !important',
    backgroundColor: 'rgba(57, 161, 201, 0.25)',
  },
  leftSleeve: {
    top: 'calc(14% - 0px)',
    right: '5%',
    width: 'calc(15% - 0px)',
    height: 'calc(16% - 0px)',
    // border: '2px solid #8783E1',
    backgroundImage: `url(
      "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%238783E1FF' stroke-width='4' stroke-dasharray='10%2c12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
    )`,
    position: 'absolute',
    transform: 'rotate(24deg)',
    // borderStyle: 'dashed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
  rightSleeve: {
    top: '15%',
    left: '5%',
    width: '14%',
    height: '16%',
    // border: '2px solid #8783E1',
    // borderStyle: 'dashed',
    position: 'absolute',
    transform: 'rotate(330deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundImage: `url(
      "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%238783E1FF' stroke-width='4' stroke-dasharray='10%2c12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
    )`,
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
  frontSide: {
    top: 'calc(28% - 0px)',
    left: '25%',
    width: 'calc(50% - 0px)',
    height: 'calc(65% - 0px)',
    // border: '2px solid #8783E1',
    // borderStyle: 'dashed',
    position: 'absolute',
    transform: 'rotate(0deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundImage: `url(
      "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%238783E1FF' stroke-width='4' stroke-dasharray='10%2c12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
    )`,
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
  shirtImage: {
    pointerEvents: 'none',
    height: '100%',
    width: '100%',
    // padding: '38px',
  },
  textColor: {
    color: '#8783E1',
  },
}));
