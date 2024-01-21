import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  rightSideWrapper: {
    width: '375px',
    // minWidth: '330px',
    maxWidth: '24vw',
    maxHeight: '100%',
    minHeight: '90%',
    // margin: '0px 1vw',
    height: '100%',
    transition: 'visibility 0s, opacity 0.5s linear',
    '&.uploadMenu': {
      // maxHeight: '50vh',
      // minHeight: '43vh',
      // width: '100%',
    },
    // padding: '16px',
  },
  boxWrapper: {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '0px 5px 4px 0px #8783E140',
    background: `linear-gradient(0deg, #282729, #282729)`,
    borderRadius: '5px',
    // display: 'flex',
  },
  imagesListWrapper: {
    margin: '0px',
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    height: '70vh',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: 5,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[800],
      borderRadius: 20,
    },
  },
}));
