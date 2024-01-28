import {makeStyles} from '@mui/styles';
import {createTheme, Theme} from '@mui/material/styles';
import { landscapeOnly } from 'hooks/breakspoints';

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    

    paddingRight: '7px',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px !important',
    height: '30px !important',
    borderRadius: '100% !important',
    paddingTop: '7px',
    [landscapeOnly]: {
      paddingTop: '5px',
      height: '10px',

    },
    // minWidth: `0px !important`,
    // minHeight: `0px !important`,
    backgroundColor: 'transparent !important',    
  },
  topLeftSideWrapper: {
    border: `1px solid #8783E1 !important`,
    borderWidth: '1px !important',
    borderRadius: '12px !important',
    backgroundColor: '#3A3862',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [landscapeOnly]: {
      alignItems: 'normal',
      margin: '10px 0'
    },
  }
}));
