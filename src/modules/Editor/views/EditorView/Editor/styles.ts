import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme: any) => ({
  switchWrraper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  editorTab: {
    position: 'relative',
    height: 'calc(100%)',
    width: 'calc(100vw - 1000px)',
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
  },
}));
