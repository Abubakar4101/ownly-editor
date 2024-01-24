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
    }
  },
  logo: {
    width: '85px !important',
    backgroundColor: '#ffffff00 !important',
  },
  sideBut: {
    fontSize: '0px !important',
    width: `40px !important`,
    height: `40px !important`,
    minWidth: `0px !important`,
    minHeight: `0px !important`,
    margin: '5px !important',
    backgroundColor: `${theme.palette.background.paper} !important`,
    border: `1px solid #8783E1 !important`,
    borderWidth: '1px !important',
    borderRadius: '12px !important',
    '&.selected': {
      background: '#6561c24d !important',
      boxShadow: '0px 0px 15px 5px #6561C2 !important',
    },
  },
}));
