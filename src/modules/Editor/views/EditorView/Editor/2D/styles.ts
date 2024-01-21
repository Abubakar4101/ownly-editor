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
    border: '2px dashed #00000045',
    aspectRatio: '1 / 1.14',
    height: '100%',
    // background: 'linear-gradient(102.01deg, #FFFFFF -0.42%, rgba(255, 255, 255, 1) 102.23%)',
    boxShadow: '0px 0px 15px 5px #6561C2 !important',
  },
  canvasWrrapper: {
    width: '100%',
    height: '100%',
    margin: 'auto',
  },
  sideWrapper: {
    width: '100px',
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
    top: '9.2px',
    left: '53.8px',
    width: '12.72px',
    height: '11.74px',
    border: '1px solid #52BA6A',
    position: 'absolute',
    transform: 'rotate(24deg)',
    borderStyle: 'dashed',
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
  rightSleeve: {
    top: '8.6px',
    left: '3.5px',
    width: '12.72px',
    height: '11.74px',
    border: '1px solid #52BA6A',
    position: 'absolute',
    transform: 'rotate(64deg)',
    borderStyle: 'dashed',
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
  frontSide: {
    top: '10px',
    left: '18px',
    width: '34px',
    height: '51.4px',
    border: '1px solid #52BA6A',
    position: 'absolute',
    transform: 'rotate(0deg)',
    borderStyle: 'dashed',
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
}));
