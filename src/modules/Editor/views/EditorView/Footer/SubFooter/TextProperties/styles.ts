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
      transition: `.3s ease-in-out`,
      transform: `translate(0px, -10px)`,
      boxShadow: `1px 1px 3px 1px #FFFFFF40 !important`,
    },
  },
  colorSectionWrapper: {
    margin: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '70%',
  },
  colorPicker: {
    width: '25px',
    height: '25px',
    borderRadius: '2px',
    cursor: 'pointer',
    backgroundColor: '#F44336',
    border: '2px solid #FFFFFF',
    '&:hover': {
      transition: `.3s ease-in-out`,
      boxShadow: `1px 1px 3px 1px #FFFFFF40 !important`,
    },
  },
  borderSectionWrapper: {
    margin: '5px 16px 5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderSelectBox: {
    width: '110px',
    height: '35px',
    borderRadius: '5px',
    color: `${theme.palette.primary.light} !important`,
    // fontSize: '10px !important',
    backgroundColor: '#424044 !important',
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
  fontButSize: {
    fontSize: '12px !important',
    width: `31px !important`,
    height: `30px !important`,
    margin: `0px !important`,
    minWidth: `30px !important`,
    backgroundColor: `${theme.palette.background.default} !important`,
    borderWidth: '1px 1px 1px 0px !important',
    border: '1px solid #516F8B4D !important',
    '&.left': {
      borderRadius: '0px 5px 5px 0px !important',
    },
    '&.right': {
      borderRadius: '5px 0px 0px 5px !important',
    },
    // width: '31px !important',
    // height: '30px !important',
    // backgroundColor: `${theme.palette.primary.light}`,
    // margin: '0px',
  },
  fontButStyle: {
    fontSize: '12px !important',
    width: `31px !important`,
    height: `32px !important`,
    minWidth: `0px !important`,
    minHeight: `0px !important`,
    backgroundColor: `${'transparent'} !important`,
    borderWidth: '1px 1px 1px 0px !important',
    // border: '1px solid #516F8B4D !important',
    '&.left': {
      borderRadius: '0px 5px 5px 0px !important',
    },
    '&.right': {
      borderRadius: '5px 0px 0px 5px !important',
    },
    '&.center': {
      borderRadius: '0px !important',
    },
    '&.selected': {
      backgroundColor: `${theme.palette.background.default} !important`,
    },
    // width: '31px !important',
    // height: '30px !important',
    // backgroundColor: `${theme.palette.primary.light}`,
    // margin: '0px',
  },
  fontBox: {
    width: '40px',
    height: '30px',
    backgroundColor: `${theme.palette.background.default} !important`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: `${theme.palette.primary.light} !important`,
    padding: '4px 2px 4px 2px',
    border: `1px solid #516F8B4D`,
  },
}));
