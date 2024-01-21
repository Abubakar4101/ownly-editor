import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useInStyles = makeStyles((theme: Theme) => ({
  uploadButton: {
    width: '100%',
    height: '125px',
    borderRadius: '3px',
    margin: '12px 0px !important',
    fontSize: '20px !important',
  },
  imageButton: {
    maxWidth: '100%',
    cursor: 'pointer',
    transition: 'transform 1s, filter .2s ease-out',
    // transform: 'scale(.98)',
    margin: '12px 0px',
    '&.selected': {
      filter: `brightness(100%)`,
      transform: 'scale(1)',
      border: `5px solid ${theme.palette.primary.main}`,
      // width: '100%',
    },
  },
}));
