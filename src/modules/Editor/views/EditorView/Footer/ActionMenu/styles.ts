import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { mobileAndLandscape, landscapeOnly } from "hooks/breakspoints";

export const useStyles = makeStyles((theme: Theme) => ({
  actionMenu: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "32px",
    border: `1px solid ${theme.palette.grey[100]}`,
    [landscapeOnly]: {
      border: "none",
    },
    minWidth: "400px",
    padding: "10px 16px",
    width: "720px",
    height: "90px",
    pointerEvents: "all",
    [theme.breakpoints.down(700)]: {
      marginLeft: "80px",
    },
    [mobileAndLandscape]: {
      justifySelf: "flex-start",
      minWidth: "530px",
      width: "790px",
      borderRadius: "0px",
    },
    "&.isSubMenu": {
      width: "780px",
      height: "90px",
      padding: "0px",
      // background: `radial-gradient(120px at 0 120px, ${theme.palette.common.black} 98%, ${theme.palette.primary.dark} 0) 0 -120px`,
    },
    transition: "width 0.5s ease-in-out", // Transition property for width
  },
  actionButton: {
    minWidth: "77px !important",
    margin: "0px 2px !important",
    "&.selected": {
      background: "#6561c24d !important",
      boxShadow: "0px 0px 15px 5px #6561C2 !important",
    },
  },
  actionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "4px",
    minWidth: "25px",
    [landscapeOnly]: {
      transform: "rotate(-90deg)",
    },
  },
  secondaryColor: {
    color: ` ${theme.palette.secondary}`,
  },
  moreButton: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: "white !important",
    fontSize: "40px !important",
    cursor: "pointer",
    borderRadius: "50%",
    border: "1px solid gray",
  },
  leftBottom: {
    [mobileAndLandscape]: {
      backgroundColor: "#282729",
      height: "90px",
width: "90px",
      zIndex: "90",
      border: "1px solid #707070",
      padding: "10px",
      transform: "translate(0, 0)",
      cursor: "pointer",
      pointerEvents: "all",
      transformOrigin: "left center",
      animation: "$leftSlide 1s ease-in-out",
      position: "fixed",
    },
  },
  sideWrapper: {
    width: '100px',
    height: '100%',
    // margin: 'auto',
    background: '#ffffff00',
    position: 'relative',
  },
  leftSleeve: {
    top: '9.2px',
    left: '53.8px',
    width: '12.72px',
    height: '11.74px',
    border: '1px solid #52BA6A',
    position: 'absolute',
    transform: 'rotate(24deg)',
    borderStyle: 'dashed',
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
  rightSleeve: {
    top: '8.6px',
    left: '3.5px',
    width: '12.72px',
    height: '11.74px',
    border: '1px solid #52BA6A',
    position: 'absolute',
    transform: 'rotate(64deg)',
    borderStyle: 'dashed',
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
  frontSide: {
    top: '10px',
    left: '18px',
    width: '34px',
    height: '51.4px',
    border: '1px solid #52BA6A',
    position: 'absolute',
    transform: 'rotate(0deg)',
    borderStyle: 'dashed',
    '&.selected': {
      backgroundColor: '#83E19866',
    },
  },
  bottomLeftPic: {
    [landscapeOnly]: {
      transform: "rotate(-90deg)",
    },
    pointerEvents: "none",
  },
}));
