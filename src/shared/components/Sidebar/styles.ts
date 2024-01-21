import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: any) => ({
  title: {
    // fontWeight: 500,
    fontWeight: 500,
    marginBottom: 1,
    textTransform: 'capitalize',
    color: '#0B6CB9',
    fontSize: '28px',
    // opacity: 0.87,
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 5,

    '& +$paper': {
      marginTop: theme.spacing(2),
    },

    '> .MuiBox-root.MuiBox-root-91': {
      marginTop: 0,
    },
  },
  scrollable: {
    // maxHeight: 'calc(100vh - 233px)',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: 5,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[800],
      borderRadius: 20,
    },
  },
  formControl: {
    marginTop: theme.spacing(4),
    width: '100%',
  },
  listingView: {
    opacity: 1,
    visibility: 'visible',
    transition: 'all 1s',

    '&.hidden': {
      opacity: 0,
      visibility: 'hidden',
      height: 0,

      '& *': {
        display: 'none',
      },
    },
  },
  createButton: {
    // marginTop: 8,
    color: 'rgb(255 255 255/ .87)',
    backgroundColor: '#0B6CB9',
    textTransform: 'uppercase',
    height: '44px',
    padding: '0 22px',

    '&:hover': {
      background: '#0B7CB9',
    },
  },
  focused: {
    '& > div': {
      border: '1px solid black',
    },
  },
  link: {
    color: 'inherit',
  },
  alertBut: {
    width: '85px',
  },
  editWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    margin: '0 auto',
  },
  mt2: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  mb2: {
    marginBottom: theme.spacing(2),
  },
  defualtButton: {
    color: 'rgba(0, 0, 0, 0.7)',
    backgroundColor: '#1034a6',
  },
  discardButton: {
    // color: 'rgba(0, 0, 0, 0.7)',
    // backgroundColor: 'rgb(241, 243, 244)',
    width: '95px',
    textTransform: 'none',
  },
  logo: {
    background: theme.palette.primary.main,
    width: 40,
    minWidth: 40,
    height: 40,
    padding: theme.spacing(1),
    borderRadius: '50%',
    '& > img': {
      maxWidth: '100%',
    },
  },
  modalTitle: {
    borderRadius: 10,
    transition: 'all 0.3s',
    '&:hover': {
      background: '#f5f5f5',
    },
  },
}));
