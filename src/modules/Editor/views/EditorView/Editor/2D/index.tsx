/* eslint-disable prettier/prettier */
import React, { useEffect, useContext, useMemo } from 'react';
import { useStyles } from './styles';
import { Box, ClickAwayListener } from '@mui/material';
import { OuterId } from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';
import { modelsConfigs } from '../configs';
import { ModelConfig, Side } from '../utilities';
import SidesFooter from '../../Footer/SidesFooter';
import clsx from "clsx";

function Editor2D() {
  const { fabricContainer, selectedCategory, selectedModelType, selectedSide, canvasColor, onSelectCategory, onInit2DEditor } =
    useContext(EditorContext);
  const classes = useStyles();

  useEffect(() => {
    onInit2DEditor();
  }, []);

  const getRatio = useMemo(() => {
    const selectedConfig = modelsConfigs[selectedModelType];
    const sideConfigs = (selectedConfig as ModelConfig).sides.find((side: Side) => side.id === selectedSide);
    return sideConfigs?.configs.canvasRatio || ""
  }, [selectedModelType, selectedSide]);

  const targetImageSrc = useMemo(() => {

  }, [])

  return (
    <Box id={`${OuterId} wrrapper`} className={clsx(classes.wrrapper, { printingTypes: selectedCategory === "PrintingTypes" })}>
      <ClickAwayListener
        onClickAway={(e: any) => {
          if (e && e.target && (e.target as EventTarget & { id: string }).id.includes(OuterId)) {
            onSelectCategory(undefined)
          }
        }}
      >
        <div className={classes.bkWrrapper}>
          <div className={classes.sideWrapper}>
            <SidesFooter />
          </div>
          {true && (
            <div id="canvas-container" className={classes.drawnWrrapper} style={{ aspectRatio: getRatio, backgroundColor: canvasColor, boxShadow: `0px 0px 15px 5px ${canvasColor}` }}>
              <canvas id="canvas" className={classes.canvasWrrapper} ref={fabricContainer}></canvas>
            </div>
          )}
          {selectedCategory !== "PrintingTypes" && < div className={classes.sideWrapper}>
            <Box style={{ position: "absolute", bottom: 0, marginLeft: "16px" }}>
              <div style={{ position: "relative", pointerEvents: "none" }}>
                <img src='./assets/images/tshirt.png' width={"70px"} style={{ pointerEvents: "none" }}></img>
                <div className={clsx(classes.leftSleeve, { selected: selectedSide === "LEFT" })}></div>
                <div className={clsx(classes.rightSleeve, { selected: selectedSide === "RIGHT" })}></div>
                <div className={clsx(classes.frontSide, { selected: selectedSide === "FRONT" })}></div>
              </div>

            </Box>
          </div>}
        </div>
      </ClickAwayListener>
    </Box >

    // </>
  );
}

export default Editor2D;
