import zIndex from "@mui/material/styles/zIndex";
import { makeStyles } from "@mui/styles";
import { landscapeOnly, mobileAndLandscape } from "hooks/breakspoints";

export const useStyles = makeStyles((theme: any) => ({
  footer: {
    backgroundColor: "##ff000000",
    position: "fixed",
    right: "5vw",
    left: "5vw",
    [theme.breakpoints.down(700)]: {
      right: "0px",
      left: "0px",
    },
    bottom: "0px",
    minHeight: "200px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: ".65em",
    pointerEvents: "none",
    [mobileAndLandscape]: {
      alignItems: "flex-end",
    },
  },
  infoBut: {
    borderRadius: "16px !important",
    margin: "8px !important",
  },
  infoWrapper: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "1em",
  },
  priceWrapper: {
    display: "flex",
    alignContent: "space-between",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "237px",
    minHeight: "90px",
    backgroundColor: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: "0px 0px 20px 20px",
    pointerEvents: "all",
  },
  priceText: {
    color: theme.palette.secondary.main,
    fontSize: "12px !important",
  },
  priceValue: {
    color: theme.palette.secondary.main,
    fontSize: "13px !important",
  },
  "@keyframes leftSlide": {
    from: {
      transform: "translate(-100%, 0)",
    },
    to: {
      transform: "translate(0, 0)",
    },
  },
  "@keyframes bottomSlide": {
    from: {
      transform: "translate(0, 100%)",
    },
    to: {
      transform: "translate(0, 0)",
    },
  },
  bottomMenuWrapper: {
    [mobileAndLandscape]: {
      overflowX: "scroll",
      overflowY: "hidden",
    },
    [landscapeOnly]: {
      position: "absolute",
      transform: "rotate(90deg)",
      right: "-24%",
      top: "0%",
    },
  },
  subBottomMenuWrapper: {
    [mobileAndLandscape]: {
      overflowX: "scroll",
      overflowY: "hidden",
    },
    "&.isSubMenu": {
      animation: "$bottomSlide 3s ease-in-out",
    },
    [landscapeOnly]: {
      position: "absolute",
      left: "50%",
      bottom: "-7%",
      transform: "translate(-50%, 0)",
      border: "2px solid #3A3862",
      borderRadius: "20px 20px 0px 0px",
    },
  },
  leftBottom: {
    [mobileAndLandscape]: {
      backgroundColor: "#282729",
      height: "90px",
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
  bottomLeftPic: {
    [landscapeOnly]: {
      transform: "rotate(-90deg)",
    },
    pointerEvents: "none",
  },
  actionMenu: {
    [mobileAndLandscape]: {
      pointerEvents: "none",
      transformOrigin: "bottom center",
      animation: "$bottomSlide 1.5s ease-in-out",
    },

    [landscapeOnly]: {
      width: "43vw",
    },
  },
  subActionMenuWrapper: {
    [mobileAndLandscape]: {
      pointerEvents: "none",
      transform: "translate(0, 0)",
      transformOrigin: "bottom center",
      animation: "$bottomSlide 1.5s ease-in-out",
    },
    [landscapeOnly]: {
      width: "60vw",
    },
  },
  subActionMenu: {
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
    [mobileAndLandscape]: {
      justifySelf: "flex-start",
      minWidth: "460px",
      width: "780px",
    },
    "&.isSubMenu": {
      height: "120px",
      borderRadius: "20px 20px 0px 0px",
      border: "2px solid #3A3862",
      [landscapeOnly]: {
        border: "none",
      },
      // background: `radial-gradient(120px at 0 120px, ${theme.palette.common.black} 98%, ${theme.palette.primary.dark} 0) 0 -120px`,
    },
    transition: "width 0.5s ease-in-out", // Transition property for width
  },
  moreButton: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: "white !important",
    fontSize: "40px !important",
    cursor: "pointer",
  },
}));
