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
  IconButton,
} from '@mui/material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {ReactSVG} from 'react-svg';
import {ChromePicker} from 'react-color';
import {
  Add,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignRight,
} from '@mui/icons-material';
import EditorContext from '../../../../../context/EditorContext';
import {Text, Canvas} from 'fabric/fabric-impl';
import debounce from 'lodash.debounce';
import {useStyles} from './styles';

interface Props {
  defualtTextAlign: string;
  onChange: (justifyValue: string) => void;
}
const JustifyValues = [
  {id: 'left', name: 'Left', icon: <FormatAlignLeft />},
  {id: 'center', name: 'Center', icon: <FormatAlignCenter />},
  {id: 'justify', name: 'justify', icon: <FormatAlignJustify />},
  {id: 'right', name: 'right', icon: <FormatAlignRight />},
];

function TextAligments({defualtTextAlign, onChange}: Props) {
  const classes = useStyles();

  const [selectedTextAlign, setSelectedTextAlign] = useState<string>(defualtTextAlign);
  return (
    <Box padding={1}>
      {JustifyValues.map(child => {
        return (
          <IconButton
            key={child.id}
            className={clsx(classes.iconBut, {
              selected: selectedTextAlign === child.id,
            })}
            aria-label={child.name}
            onClick={() => {
              onChange(child.id);
              setSelectedTextAlign(child.id);
            }}
          >
            {child.icon}
          </IconButton>
        );
      })}
    </Box>
  );
}

export default TextAligments;
