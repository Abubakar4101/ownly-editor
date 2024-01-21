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
import BorderStyle from './BorderStyle';
import BorderWight from './BorderWight';
import CornerRounding from './CornerRounding';
import PrintingSettings from './PrintingSettings';

import EditorContext from '../../../context/EditorContext';

export type PenTypes = 'Pencil' | 'Circle' | 'Marker' | 'Easer';

function GraphicsProperties() {
  const [searchValue, setSearchValue] = useState<string>('');
  const {onDraw, cancelDrawing} = useContext(EditorContext);

  const classes = useStyles();

  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
        <ColorSelection />
      </Box>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <Box display={'flex'} alignItems={'center'}>
        <BorderStyle />
      </Box>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <BorderWight />
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <CornerRounding />
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <PrintingSettings />
    </Box>
  );
}

export default GraphicsProperties;
