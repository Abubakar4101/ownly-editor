import {createStyles, makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backdrop: {
      background: 'rgb(4 4 15 / 80%) !important',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      outline: 'none',
      borderRadius: '10px',
      padding: theme.spacing(3),
      width: '400px',
    },
    icon: {
      cursor: 'pointer',
    },
    title: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
    },
    header: {
      marginBottom: theme.spacing(3),
    },

    content: {
      marginBottom: theme.spacing(3),
      wordBreak: 'break-all',
      whiteSpace: 'break-spaces',
    },
    actionBtns: {
      marginLeft: '10px !important',
      minWidth: '85px',
    },
    btn: {
      marginLeft: 'inherit',
    },
    actionContainers: {
      '& > :first-child': {
        marginBottom: theme.spacing(3),
        padding: '0px 35px',
      },
    },
    containedDanger: {
      background: theme.palette.error.main,
      color: theme.palette.error.contrastText,

      '&:hover, &.hover': {
        background: theme.palette.error.light,
      },
    },
    textDanger: {
      color: theme.palette.error.main,
    },
    text: {
      padding: theme.spacing(0, 1),
      borderRadius: 0,
      border: '1px solid transparent',
    },
    containedSecondary: {
      background: theme.palette.grey[100],
      color: theme.palette.text.secondary,
      '&:hover, &.hover': {
        background: '#cecfd0',
      },
    },
  }),
);
