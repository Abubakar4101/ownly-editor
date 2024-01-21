import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  headingBox: {
    // width: '100%',
    height: '80px',
    margin: '16px 0px',
    borderRadius: '3px',
    background: `background: linear-gradient(0deg, #8783E1, #8783E1),
    linear-gradient(0deg, #282729, #282729)`,
    boxShadow: `0px 5px 4px 0px #8783E140`,
    border: `1px solid #8783E1`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: `${theme.palette.primary.light}`,
    '&:hover': {
      transition: `.3s ease-in-out`,
      background: `hsla(0,0%,100%,.15)`,
    },
    '&.selected': {
      transition: `.3s ease-in-out`,
      background: `hsla(0,0%,100%,.15)`,
      border: `2px solid #8783E1`,
    },
  },
}));
