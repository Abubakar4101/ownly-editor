import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  notification: {
    position: 'fixed',
    top: theme.custom.headerHeight,
    padding: theme.spacing(1, 4),
    right: 0,
    left: 0,
    zIndex: 100000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&.primary': {
      background: theme.palette.primary.shades[5],
      color: theme.palette.background.default,
      '& .primaryAction': {
        color: '#cfd8dc',
      },
      '& .secondaryAction': {
        color: '#8b91b5',
      },
    },

    '&.secondary': {
      background: theme.palette.secondary.shades[6],
      color: theme.palette.background.default,

      '& .primaryAction': {
        color: theme.palette.background.default,
      },
      '& .secondaryAction': {
        color: theme.palette.secondary.shades[12],
      },
    },
    '&.danger': {
      background: theme.palette.danger.main,
      color: theme.palette.background.default,
      '& .primaryAction': {
        color: theme.palette.background.default,
      },
      '& .secondaryAction': {
        color: theme.palette.grey[200],
      },
    },

    '&.warning': {
      background: theme.palette.warning.main,
      color: '#263238',
      '& .primaryAction': {
        color: '#37474f',
      },
      '& .secondaryAction': {
        color: '#546e7a',
      },
    },

    '&.success': {
      background: theme.palette.success.main,
      color: theme.palette.background.default,
      '& .primaryAction': {
        color: theme.palette.background.default,
      },
      '& .secondaryAction': {
        color: theme.palette.grey[200],
      },
    },

    '&.light': {
      background: theme.palette.grey[50],
      color: '#263238',
      '& .primaryAction': {
        color: theme.palette.primary.light,
      },
      '& .secondaryAction': {
        color: theme.palette.danger.main,
      },
    },

    '&.dark': {
      background: '#263238',
      color: theme.palette.background.default,
      '& .primaryAction': {
        color: '#cfd8dc',
      },
      '& .secondaryAction': {
        color: '#ff6e73',
      },
    },
  },

  alert: {
    width: '100%',
    padding: theme.spacing(2, 4),
    zIndex: 100000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '&.primary': {
      background: theme.palette.primary.shades[5],
      color: theme.palette.background.default,
    },

    '&.secondary': {
      background: theme.palette.secondary.shades[6],
      color: theme.palette.background.default,
    },
    '&.danger': {
      background: theme.palette.danger.main,
      color: theme.palette.background.default,
    },

    '&.warning': {
      background: theme.palette.warning.main,
    },

    '&.success': {
      background: theme.palette.success.main,
      color: theme.palette.background.default,
    },

    '&.light': {
      background: theme.palette.grey[50],
    },

    '&.dark': {
      background: '#263238',
      color: theme.palette.background.default,
    },
  },

  feedback: {
    '& .MuiPaper-root': {
      background: theme.palette.secondary.dark,
      padding: theme.spacing(2, 3),
      '& .MuiSnackbarContent-message': {
        padding: 0,
      },
      '& .MuiSnackbarContent-action': {
        color: theme.palette.highlight.main,
        '& .MuiSvgIcon-root': {
          width: '20px',
          height: '20px',
        },
      },

      '&.warning': {
        background: theme.palette.warning.main,
        '& .MuiSnackbarContent-message': {
          color: theme.palette.warning.contrastText,
        },
        '& .MuiSnackbarContent-action': {
          color: theme.palette.warning.contrastText,
        },
      },
      '&.error': {
        background: theme.palette.error.main,
        '& .MuiSnackbarContent-message': {
          color: theme.palette.error.contrastText,
        },
        '& .MuiSnackbarContent-action': {
          color: theme.palette.error.contrastText,
        },
      },
    },
  },
  mr: {
    marginRight: theme.spacing(1),
  },
  actionButton: {
    '&[class*="MuiButton-root"]': {
      height: 'auto',
    },
  },
}));
