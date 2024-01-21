/* eslint-disable prettier/prettier */
import React, { useEffect, useContext, useMemo } from 'react';
import { useStyles } from './styles';
import { Box, ClickAwayListener, Typography } from '@mui/material';
import { OuterId } from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';
import { modelsConfigs } from '../configs';
import { ModelConfig, Side } from '../utilities';
import clsx from "clsx";

function StartCanvas() {
  const { selectedModelType, selectedSide, onSelectFistSide } =
    useContext(EditorContext);
  const classes = useStyles();

  const getRatio = useMemo(() => {
    const selectedConfig = modelsConfigs[selectedModelType];
    const sideConfigs = (selectedConfig as ModelConfig).sides.find((side: Side) => side.id === selectedSide);
    return sideConfigs?.configs.canvasRatio || ""
  }, [selectedModelType, selectedSide]);


  return (
    <Box id={`pop`} className={classes.wrrapper}>
      <div className={classes.bkWrrapper}>
        <div className={classes.sideWrapper}></div>
        {true && (
          <div id="canvas-container" className={classes.drawnWrrapper} style={{ aspectRatio: getRatio }}>
            <div style={{ position: "relative"}}>
              <img src='./assets/images/tshirt.png' className={classes.shirtImage}></img>
              <div className={clsx(classes.frontSide, { selected: false })} onClick={() => {
                onSelectFistSide("FRONT")
              }}>
                <Typography variant="subtitle1" display="block" className={classes.textColor} >
                  {'edit here'}
                </Typography>
              </div>
              <div className={clsx(classes.leftSleeve, { selected: false })} onClick={() => {
                onSelectFistSide("LEFT")
              }}>
                <Typography variant="subtitle1" display="block" className={classes.textColor} >
                  {'edit here'}
                </Typography>
              </div>
              <div className={clsx(classes.rightSleeve, { selected: false })} onClick={() => {
                onSelectFistSide("RIGHT")
              }}>
                <Typography variant="subtitle1" display="block" className={classes.textColor} >
                  {'edit here'}
                </Typography>
              </div>
            </div>
          </div>
        )}
        <div className={classes.sideWrapper}></div>
      </div>
    </Box >

    // </>
  );
}

export default StartCanvas;
