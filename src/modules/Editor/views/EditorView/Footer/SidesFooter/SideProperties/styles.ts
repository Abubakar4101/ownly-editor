import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  borderSectionWrapper: {
    margin: '5px 16px 5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
