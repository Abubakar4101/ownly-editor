import React, {useContext, useState, useCallback} from 'react';
import {useStyles} from './styles';
import {Box, Typography} from '@mui/material';
import {ReactSVG} from 'react-svg';
import clsx from 'clsx';
import {PenTypes} from './index';
import EditorContext from '../../../context/EditorContext';
import {BorderStyle} from 'modules/Editor/definitions/types';

// interface Props {
// selectedPenType?: PenTypes;
// setselectedPenType: (penType?: PenTypes) => void;
// }

function BorderStyleSection() {
  // const {selectedPenType, setselectedPenType} = props;
  const classes = useStyles();
  const {selectedObjectsConfig, onBold, onItalic, onChangeColor, onChangeBorderStyle} =
    useContext(EditorContext);

  console.log('selectedObjectsConfig', selectedObjectsConfig.dashedBorders);
  const handleOnChangeBorderStyle = useCallback(
    (borderStyle: BorderStyle) => {
      onChangeBorderStyle(borderStyle);
    },
    [onChangeBorderStyle],
  );

  return (
    <Box className={classes.borderSectionWrapper}>
      <Typography variant="subtitle2" gutterBottom color={'white'} mb={1}>
        Border Styles
      </Typography>
      <Box className={classes.borderStyleWrraper}>
        <Box
          onClick={() => {
            handleOnChangeBorderStyle('Dash');
          }}
          className={clsx(classes.borderButt, classes.dashed, {
            selected: selectedObjectsConfig.dashedBorders,
          })}
        ></Box>
        <Box
          onClick={() => {
            handleOnChangeBorderStyle('Solid');
          }}
          className={clsx(classes.borderButt, classes.solid, {
            selected: !selectedObjectsConfig.dashedBorders,
          })}
        ></Box>
      </Box>
    </Box>
  );
}

export default BorderStyleSection;
