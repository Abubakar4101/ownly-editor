import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  topMenuWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  penButton: {
    cursor: 'pointer',
    margin: '8px 16px',
    '&:hover': {
      transition: `.1s ease-in-out`,
      transform: `translate(0px, -10px)`,
      boxShadow: `1px 1px 3px 1px #FFFFFF40 !important`,
    },
    '&.selected': {
      background: '#6561c24d !important',
      boxShadow: '0px 0px 15px 5px #6561C2 !important',
    },
  },
  colorSectionWrapper: {
    height: '80%',
    width: '80px',
    margin: '8px 8px 8px 8px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  colorPicker: {
    width: '25px',
    height: '25px',
    borderRadius: '2px',
    margin: '0px 6px',
    cursor: 'pointer',
    backgroundColor: '#F44336',
    border: '2px solid #FFFFFF',
    '&:hover': {
      transition: `.3s ease-in-out`,
      boxShadow: `1px 1px 3px 1px #FFFFFF40 !important`,
    },
  },
  borderSectionWrapper: {
    margin: '8px 16px 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '70%',
  },
  borderSelectBox: {
    width: '110px',
    height: '35px',
    borderRadius: '5px',
    color: 'white !important',
    // fontSize: '10px !important',
    backgroundColor: `${theme.palette.background.default} !important`,
    '& .MuiSelect-select': {
      paddingTop: '7px',
    },
  },
  divider: {
    borderColor: '#FFFFFF !important',

    '& .MuiDivider-root': {
      borderColor: '#FFFFFF',
    },
  },
  borderStyleWrraper: {
    width: '160px',
    height: '40px',
    padding: '8px 0px',
    border: `1px solid ${theme.palette.background.default}`,
    display: 'flex',
    borderRadius: '8px',
  },
  borderButt: {
    width: '50%',
    height: '20px',
    margin: '0px 8px',
    cursor: 'pointer',
    borderRadius: '8px',
  },
  dashed: {
    border: `1px dashed ${theme.palette.primary.light}`,
    '&.selected': {
      backgroundColor: `${theme.palette.background.default}`,
    },
  },
  solid: {
    border: `1px solid ${theme.palette.primary.light}`,
    '&.selected': {
      backgroundColor: `${theme.palette.background.default}`,
    },
  },
}));
