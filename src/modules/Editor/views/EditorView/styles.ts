import { Height } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';
import {makeStyles} from '@mui/styles';
import {mobileAndLandscape, landscapeOnly} from 'hooks/breakspoints'
export const useStyles = makeStyles((theme: any) => ({
  switchWrraper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginInline: '16px',
    [landscapeOnly]: {
      position: 'absolute',
      top: '30vh',
      left: '-40vw',
    }
  },
  rotateLeft: {
    transform: 'rotateZ(-180deg)',
    transition: 'transform 0.3s ease-in-out',
  },
  normal: {
    transform: 'rotateZ(0deg)',
    transition: 'transform 0.3s ease-in-out',
  },
  rotateRight: {
    transform: 'rotateZ(180deg)',
    transition: 'transform 0.3s ease-in-out',
  },
  editorWrraper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'calc(100vh - 210px)',
    marginTop: '16px',
    width: '100%',
    '&.isFirstUse': {
      justifyContent: 'flex-start',
      marginTop: '0px',
    },
    [mobileAndLandscape]: {
      flexDirection: 'column',
      justifyContent: 'center',
      '&.isFirstUse': {
        justifyContent: 'center',
      },
    },
  },
}));
