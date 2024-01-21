import React from "react";
import { Button, Box } from "@mui/material";
import clsx from "clsx";
import { useStyles } from "./styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Color } from "fabric/fabric-impl";

interface Props {
  buttonColor: string;
  selected: boolean;
  degree: string;
  transValue: string;
  animationDelay: number;
  onClick: () => void;
}

export default function ColorButton(props: Props) {
  const { buttonColor, selected, degree, transValue, animationDelay, onClick } =
    props;
  const classes = useStyles();
  const buttonPosition = {
    transform: `rotate(${degree}deg)`,
    translate: `${transValue}px 0px`,
    // transformOrigin: 'top right',
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: `${buttonColor}`, // Replace with your desired color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        className={clsx(classes.colorButtonContainer)}
        style={buttonPosition}
      >
        {selected === true ? (
          <div className={clsx(classes.selectedText)}>selected color</div>
        ) : (
          <div style={{ color: "#aaaaaa", fontSize: "12px", opacity: "0" }}>
            selected color
          </div>
        )}
        <Button
          className={clsx(classes.colorButton, classes.animatedButton, {
            selected: selected,
          })}
          variant="contained"
          color="primary"
          onClick={onClick}
          style={{ animationDelay: `${animationDelay}ms` }} // Apply the animation delay as a styl
        ></Button>
      </Box>
    </ThemeProvider>
  );
}
