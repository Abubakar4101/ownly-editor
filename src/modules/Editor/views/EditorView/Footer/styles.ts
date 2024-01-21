import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles((theme: any) => ({
  footer: {
    backgroundColor: '##ff000000',
    position: 'fixed',
    right: '5vw',
    left: '5vw',
    bottom: '0px',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '.65em',
    pointerEvents: 'none',
  },
  infoBut: {
    borderRadius: '16px !important',
    margin: '8px !important',
  },
  infoWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '1em',
  },
  priceWrapper: {
    display: 'flex',
    alignContent: 'space-between',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '237px',
    minHeight: '90px',
    backgroundColor: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: '0px 0px 20px 20px',
    pointerEvents: 'all',
  },
  priceText: {
    color: theme.palette.secondary.main,
    fontSize: '12px !important',
  },
  priceValue: {
    color: theme.palette.secondary.main,
    fontSize: '13px !important',
  },
}));
