import React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import { Box } from "@mui/material";
import { useLocation } from "react-router";
import PageWrapper from "./PageWrapper";
import { TopbarHeight } from "shared/globalTheme/Theme-variable";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

interface Props {
  children: React.ReactNode;
}

export default function ModuleWrapper(props: Props) {
  const { children } = props;
  const theme = useTheme();

  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flex: "1 1 auto",
      overflow: "hidden",
      flexDirection: "column",

      // backgroundColor: "#4f4f4f",
      [theme.breakpoints.up("lg")]: {
        paddingTop: TopbarHeight,
      },
      [theme.breakpoints.down("lg")]: {
        paddingTop: "64px",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box sx={{ overflow: "auto" }}> {children}</Box>
    </div>
  );
}

export const moduleWrapper =
  (
    Component: React.LazyExoticComponent<
      (props: RouteConfigComponentProps) => JSX.Element | null
    >
  ) =>
  (props: RouteConfigComponentProps) => {
    return (
      <>
        <ModuleWrapper>
          <PageWrapper height={10}>
            <Component {...props} />
          </PageWrapper>
        </ModuleWrapper>
      </>
    );
  };
