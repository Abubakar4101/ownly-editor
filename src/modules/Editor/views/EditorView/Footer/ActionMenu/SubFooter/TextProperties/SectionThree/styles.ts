import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  iconBut: {
    color: `${theme.palette.primary.light} !important`,
    '&.selected': {
      backgroundColor: `${theme.palette.background.default} !important`,
    },
  },
  input: {
    '& .MuiOutlinedInput-input': {
      color: 'white',
      opacity: '1',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#dee3e94f'}`,
    },
  },
}));
