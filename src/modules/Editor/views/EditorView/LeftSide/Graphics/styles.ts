import {makeStyles} from '@mui/styles';
import {Theme} from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  topMenuWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  catButton: {
    width: '50%',
    height: '48px',
    fontSize: '16px !important;',
    fontWeight: 400,
    color: `${theme.palette.primary.light} !important`,
    border: '0px !important',
    '&.active': {
      border: '1px solid #8783E1 !important',
      boxShadow: '0px 5px 4px 0px #8783E140 !important',
      borderRadius: '3px',
    },
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#5d5c5e',
    margin: '0px',
    '& .MuiInputBase-root': {
      height: '35px !important',
      borderRadius: 4,
      position: 'relative',
      fontSize: 16,
      width: 'auto',
      padding: '0px',
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    },
    '& .MuiInputBase-input': {
      paddingTop: '0px !important',
      color: `${theme.palette.primary.light} !important`,
    },
  },
  searchBut: {
    borderRadius: `0 !important`,
    width: '31.59px !important',
    minWidth: '31.59px !important',
    height: '34px !important',
    boxShadow: `1px 1px 3px 1px #FFFFFF40 !important`,
  },
  shapesTab: {
    width: '100%',
    maxHeight: 'calc(100% - 58px)',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    justifyContent: 'center',
    marginTop: '8px',
    '&::-webkit-scrollbar': {
      width: 5,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[800],
      borderRadius: 20,
    },
  },

  shapeButt: {
    margin: '8px',
    width: '85px',
    height: '80px',
    cursor: 'pointer',
    // backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      // backgroundColor: '#5d5c5e',
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  wrrapper: {
    // display: 'flex',
    height: '100%',
    flexWrap: 'wrap',
    overflow: 'auto',
    // justifyContent: 'center',
    gap: '24px',
    marginTop: '8px',
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[500],
      borderRadius: theme.shape.borderRadius,
    },
  },
  listWrapper: {
    height: '100%',
    overflow: 'auto',
    margin: '2px 1px',
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[500],
      borderRadius: theme.shape.borderRadius,
    },
  },
  scrollBar: {
    '&::-webkit-scrollbar': {
      width: 4,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[500],
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
