import React, {useEffect, useMemo, useState, useContext, useCallback} from 'react';
import {
  Box,
  Popover,
  Button,
  FormControl,
  FilledInput,
  TextField,
  Input,
  Divider,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Fab,
} from '@mui/material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {ReactSVG} from 'react-svg';
import {ChromePicker} from 'react-color';
import {Add, Remove} from '@mui/icons-material';
import EditorContext from '../../../context/EditorContext';
import {Text, Canvas} from 'fabric/fabric-impl';
import debounce from 'lodash.debounce';

type Tabs = 'TextStyles' | 'Heading';

interface Props {
  defaultColor: string;
  onChange: (hexColor: string) => void;
}
function CustomColorPicker({defaultColor, onChange}: Props) {
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  return (
    <ChromePicker
      color={selectedColor}
      onChange={e => {
        setSelectedColor(e.hex);
        onChange(e.hex);
      }}
    />
  );
}

export default CustomColorPicker;
