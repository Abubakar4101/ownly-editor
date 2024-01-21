import { makeStyles } from '@mui/styles';
const drawerWidth = 240;

// @ts-ignore
export const useStyles = makeStyles((theme: any) => ({
  imageItem: {
    display: 'flex',
    border: '2.5px solid  #979494',
    height: '100%',
    padding: '2px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: "50px",

    '&:hover': {
      border: `2.5px dashed ${theme.palette.primary.main}`,
      cursor: 'pointer',

    },
  },
  imageItemBtnWrapper: {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: '10px',
    height: '100%',
  },
  imageDiv: {
    color: '#3d3d3d',
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    '&:hover': {
      color: `${theme.palette.primary.main}`,
    },
  },
  imageIcon: {
    fontSize: "28px",
  },

}));
