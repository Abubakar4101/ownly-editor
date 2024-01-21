import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  rightSideWrapper: {
    width: '436px',
    minHeight: '57vh',
    // margin: '16px',
    // padding: '16px',
  },
  boxWrapper: {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 5px 4px 0px #8783E140',
    background: `linear-gradient(0deg, #282729, #282729)`,
    borderRadius: '5px',
  },
}));
