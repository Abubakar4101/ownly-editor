import React, { ReactElement, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { TestType } from "../../../../definitions/types/index";
import { Button, Box, IconButton, Fab, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { InfoOutlined, InvertColorsOutlined } from "@mui/icons-material";
import { ReactSVG } from "react-svg";
import clsx from "clsx";

interface Props {
  name: string;
  selected: boolean;
  iconSrc: string;
  onClick: () => void;
}
function ActionButton(props: Props) {
  const { name, selected, iconSrc, onClick } = props;
  const classes = useStyles();
  const handleSVGInjection = (svg: any) => {
    // Modify the SVG's attributes here
    svg.setAttribute("width", "24px");
    svg.setAttribute("height", "24px");
  };
  return (
    <Button
      className={clsx(classes.actionButton, { selected: selected })}
      variant="text"
      color="secondary"
      onClick={onClick}
    >
      <Box className={classes.actionContainer}>
        <ReactSVG beforeInjection={handleSVGInjection} src={iconSrc} />
        <Typography variant="caption" display="block">
          {name}
        </Typography>
      </Box>
    </Button>
  );
}

export default ActionButton;
