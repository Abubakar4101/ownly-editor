import React, {useEffect, useMemo, useState, useContext, useCallback} from 'react';
import {useStyles} from './styles';
import {
  Box,
  Switch,
  Button,
  FormControl,
  FilledInput,
  TextField,
  Input,
  Divider,
} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {ReactSVG} from 'react-svg';

import ColorSelection from './ColorSelection';
import BorderWight, {WightsOptions} from './BorderWight';
import PrintingSettings from './PrintingSettings';
import PensSection from './PensSection';
import EditorContext from '../../../context/EditorContext';

type Tabs = 'TextStyles' | 'Heading';
export type PenTypes = 'Pencil' | 'Circle' | 'Marker' | 'Easer';

function Draw() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Heading');
  const [searchValue, setSearchValue] = useState<string>('');
  const {onDraw, cancelDrawing, isDrawingMode} = useContext(EditorContext);
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
  }, [isDrawingMode, selectedPenType]);

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
    <Box key={selectedPenType} display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
      <Box mr={0.5} display={'flex'}>
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
