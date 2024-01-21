import {makeStyles} from '@mui/material/styles';

export const useStyles = makeStyles(theme => ({
  box: {
    border: `1px solid ${theme.palette.grey[300]}`,
    margin: theme.spacing(2),
    transition: 'all 0.3s',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '350px',

    '&.small': {
      width: 247,
    },
    '&.medium': {
      width: 328,
    },
    '&.large': {
      width: 348,
    },
    '& .moduleShape': {
      opacity: 1,
      transition: 'all 0.1s',
      '&.large': {
        width: 36,
        height: 36,
        '& > svg': {
          width: 24,
          height: 24,
        },
      },
    },

    '&:hover, &.checked': {
      background: theme.palette.grey[100],

      '& $lowerSection': {
        background: 'transparent',
      },

      '& $checkbox': {
        display: 'block',
      },
      '& $actions': {
        visibility: 'visible',
        opacity: 1,
        right: 10,
      },
    },
    '&.selectable': {
      '&:hover, &.checked': {
        '& .moduleShape': {
          opacity: 0,
        },
      },
    },
  },
  actions: {
    position: 'absolute',
    right: 20,
    visibility: 'hidden',
    opacity: 0,
    transition: 'all 0.3s',
    zIndex: 1,
  },
  actionBtn: {
    padding: 9,
    color: theme.palette.grey[700],

    '& svg': {
      fontSize: '1rem',
    },
  },
  headerIcon: {
    marginRight: theme.spacing(0.5),

    '& > svg': {
      color: theme.palette.grey[700],
      width: 16,
      height: 16,
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.grey[700],
    width: 16,
    height: 16,
  },
  checkbox: {
    display: 'none',
    position: 'absolute',
    left: -10,
    '&.Mui-checked': {
      color: 'rgba(32, 46, 114, .7)',
    },
  },
  name: {
    marginLeft: theme.spacing(1),
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: 180,
    overflow: 'hidden',
    fontWeight: 500,
    '& > a': {
      color: 'inherit',
    },
  },
  highlightedDetails: {
    background: theme.palette.grey[100],
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.shape.borderRadius,
  },
  upperSection: {
    padding: theme.spacing(2),
  },
  lowerSection: {
    background: theme.palette.grey[100],
    padding: theme.spacing(1, 3),
    transition: 'all 0.3s',
  },
  contentElements: {
    '& .item + .item': {
      marginTop: theme.spacing(2),
    },
    '& .icon': {
      marginRight: theme.spacing(2),
      opacity: 0.8,
    },
  },
  footerElements: {
    '& .icon': {
      marginRight: theme.spacing(1),
      opacity: 0.8,
    },
  },
  headerTitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: 200,
    overflow: 'hidden',
    '& > a': {
      color: theme.palette.text.secondary,
      position: 'relative',
      '&:after': {
        content: "''",
        position: 'absolute',
        height: 2,
        right: 0,
        left: 0,
        bottom: -1,
        background: theme.palette.text.secondary,
        opacity: 0.6,
      },
    },
  },
  moduleShape: {
    minWidth: 12,
    width: 12,
    height: 12,
    // marginRight: theme.spacing(1),
    display: 'inline-block',
    '&.icon, &.iconRounded': {
      minWidth: 14,
      width: 14,
      height: 14,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      overflow: 'hidden',

      '& > svg , > img': {
        width: '95%',
        color: 'white',
        maxHeight: '99%',
      },
    },

    '&.iconRounded': {
      borderRadius: '50%',
    },
    '&.medium': {
      width: 24,
      minWidth: 24,
      height: 24,
      padding: 3,
      marginRight: 0,
      '&.iconRounded': {
        '& > svg , > img': {
          width: 18,
          height: 18,
        },
      },
    },
    '&.large': {
      width: 36,
      minWidth: 36,
      height: 36,
      '&.iconRounded': {
        '& > svg , > img': {
          width: 24,
          height: 24,
        },
      },
    },
  },
  iconStyle: {
    display: 'flex',
    '&.small': {
      width: 16,
      height: 16,
    },
    '&.medium': {
      width: 20,
      height: 20,
    },
    '& > svg': {
      width: '100%',
      height: '100%',
    },
    '&.action': {
      color: theme.palette.text.secondary,
    },
    '&.function': {
      color: `${theme.palette.grey[700]}cc`,
    },
  },
  Industry: {
    height: 28,
    maxWidth: 110,
    borderRadius: 5,
    border: '1.5px solid #0b6cb9',
    padding: theme.spacing(0, 0.5, 0, 0.5),
    background: `#ffffff`,
    textAlign: 'center',
    justifyContent: 'center',
  },
  tagsWrapper: {
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '10px',
    justifyContent: 'flex-start',
    height: '45px',
    overflow: 'hidden',
    marginTop: '10px',
  },
  tagChip: {
    minWidth: 50,
    borderRadius: 5,
    border: '1.5px solid #0b6cb9',
    padding: theme.spacing(0, 1, 0, 1),
    background: `#ffffff`,
    margin: '5px',
    height: '30px',
  },
  text: {
    marginLeft: 6,
    // marginRight: 'auto',
    color: `#0b6cb9`,
  },
  descriptionText: {
    height: '45px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  severityColor: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    border: `1px solid ${theme.palette.grey[700]}`,
  },
}));
