import React, {useEffect, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Divider} from '@mui/material';
import ColorSelection from './ColorSelection';
import BorderWight, {WightsOptions} from './BorderWight';
import PrintingSettings from './PrintingSettings';
import PensSection from './PensSection';
import EditorContext from '../../../../context/EditorContext';

type Tabs = 'TextStyles' | 'Heading';
export type PenTypes = 'Pencil' | 'Circle' | 'Marker' | 'Easer';

function Draw() {
  const {fabricCanvas, onDraw, cancelDrawing, isDrawingMode} = useContext(EditorContext);
  const [selectedPenType, setselectedPenType] = useState<PenTypes | undefined>(
    isDrawingMode() ? 'Pencil' : undefined,
  );
  const [selectedPenColor, setSelectedPenColor] = useState<string>('red');
  const [selectedPenWight, setSelectedPenWight] = useState<number>(2);

  const classes = useStyles();
  useEffect(() => {
    if (isDrawingMode() && !selectedPenType) {
      setselectedPenType('Pencil');
    }
  }, [fabricCanvas?.isDrawingMode, isDrawingMode, selectedPenType]);

  useEffect(() => {
    if (!fabricCanvas) {
      return;
    }
    fabricCanvas.on('mouse:up', e => {
      if (!fabricCanvas.isDrawingMode) {
        setselectedPenType(undefined);
      }
    });
  }, [fabricCanvas]);

  useEffect(() => {
    if (selectedPenType) {
      onDraw({
        type: selectedPenType || 'Pencil',
        color: selectedPenColor,
        width: selectedPenWight,
      });
    }
  }, [selectedPenColor, selectedPenType, selectedPenWight]);

  return (
    <Box
      key={selectedPenType}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box mr={0.5} display={'flex'} width={'300px'} justifyContent={'space-evenly'}>
        <PensSection
          selectedPenType={selectedPenType}
          setselectedPenType={penType => {
            if (penType) {
              setSelectedPenWight(
                (WightsOptions[penType][0] && WightsOptions[penType][0].value) || 0,
              );
            } else {
              cancelDrawing();
            }
            setselectedPenType(penType);
          }}
        />
      </Box>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <Box display={'flex'} alignItems={'center'}>
        <ColorSelection
          selectedPenColor={selectedPenColor}
          setSelectedPenColor={setSelectedPenColor}
        />
      </Box>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <BorderWight
        selectedPenType={selectedPenType}
        selectedPenWight={selectedPenWight}
        setSelectedPenWight={setSelectedPenWight}
      />
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <PrintingSettings />
    </Box>
  );
}

export default Draw;
