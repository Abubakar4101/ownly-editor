import { makeStyles } from '@mui/styles';
import { landscapeOnly, mobileAndLandscape } from 'hooks/breakspoints';

export const useStyles = makeStyles((theme: any) => ({
  switchWrraper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  editorTab: {
    position: 'relative',
    height: 'calc(100%)',
    width: 'calc(100%)',
    '&.rightSideMenu': {
      width: 'calc(100vw - 700px)',
    },
    '&.printingTypes': {
      width: '100vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '&.isFirstUse': {
      width: 'calc(100vw - 780px)',
    },
    display: 'flex',
    justifyContent: 'center',
    [landscapeOnly]: {
      top: '-30%',
    }
  },
}));
