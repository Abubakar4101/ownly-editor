import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useInStyles = makeStyles((theme: Theme) => ({
  uploadButton: {
    width: '100%',
    height: '125px',
    borderRadius: '3px',
    margin: '12px 0px !important',
    fontSize: '20px !important',
  },
  uploadImage: {
    width: '100%',
    borderRadius: '3px',
    margin: '12px 0px !important',
    fontSize: '20px !important',
    boxShadow: `0px 5px 4px 0px #8783E140`,
    border: `1px solid #8783E1`,
    cursor: 'pointer',
    display: 'flex',
    '&:hover': {
      transition: `.3s ease-in-out`,
      background: `hsla(0,0%,100%,.15)`,
      boxShadow: '0px 0px 15px 5px #6561C2 !important',
      '& img': {
        opacity: 0.75,
      },
    },
    '&.selected': {
      transition: `.3s ease-in-out`,
      background: `hsla(0,0%,100%,.15)`,
      border: `2px solid #8783E1`,
    },
  },
}));
