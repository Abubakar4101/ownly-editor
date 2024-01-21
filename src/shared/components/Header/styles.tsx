import {makeStyles} from '@mui/styles';
import {createTheme, Theme} from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  headerWrapper: {
    // height: '57px',
    width: '100%',
    backgroundColor: `${theme.palette.primary.dark} !important`,
    overflow: 'hidden',
  },
  submitButton: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  sizeSelect: {
    minWidth: '70px',
    marginRight: '8px',
    color: 'white !important',
    '& .MuiSelect-icon': {
      color: 'white',
    },
  },
  logo: {
    width: '85px !important',
    backgroundColor: '#ffffff00 !important',
  },
}));
