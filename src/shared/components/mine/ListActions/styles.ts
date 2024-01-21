import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme: any) => ({
  listTitle: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(4),
    '& .MuiFormControlLabel-label': {
      fontSize: '0.87rem',
    },
    '& .MuiCheckbox-root': {
      color: '#1873d6',
    },
  },
  actionButton: {
    borderRadius: 15,
    '&.small': {
      backgroundColor: '#d20000',
    },
    '&:hover': {
      background: '#d30000',
    },
  },
}));
