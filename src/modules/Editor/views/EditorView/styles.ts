import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme: any) => ({
  switchWrraper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginInline: '16px',
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
      height: 'calc(100vh - 70px)',
      justifyContent: 'flex-start',
      marginTop: '0px',
    },
  },
}));
