import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  iconBut: {
    color: `${theme.palette.primary.light} !important`,
    '&.selected': {
      backgroundColor: `${theme.palette.background.default} !important`,
    },
  },
}));
