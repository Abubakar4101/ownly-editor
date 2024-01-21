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
  Slider,
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
  title: string;
  defualtValue: number;
  onChange: (value: number) => void;
}
const JustifyValues = [
  {id: 'left', name: 'Left', icon: <FormatAlignLeft />},
  {id: 'center', name: 'Center', icon: <FormatAlignCenter />},
  {id: 'justify', name: 'justify', icon: <FormatAlignJustify />},
  {id: 'right', name: 'right', icon: <FormatAlignRight />},
];

function TextAligments({title, defualtValue, onChange}: Props) {
  const classes = useStyles();
  const [value, setValue] = useState<number>(defualtValue);

  const onChangeVal = useCallback(
    (value: number) => {
      setValue(value);
      onChange(value === 0 ? 0 : Number(value) / 100 || 1);
    },
    [onChange],
  );

  return (
    <Box
      padding={'8px 16px'}
      width={'215px'}
      height={'100px'}
      borderRadius={'16px'}
      border={'1px solid #ffffff9e'}
    >
      <Box width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="caption" gutterBottom color={'white'}>
          {title}
        </Typography>
        <TextField
          type="number"
          id="outlined-basic"
          variant="outlined"
          size="small"
          color="primary"
          defaultValue={defualtValue}
          value={value}
          inputProps={{
            min: 0, // Set your minimum limit here
            max: 100,
          }}
          className={classes.input}
          style={{
            width: '68px',
            color: 'white',
          }}
          onChange={e => {
            onChangeVal(Number(e.target.value));
          }}
        />
      </Box>
      <Box mt={1}>
        <Slider
          size="small"
          min={0}
          max={100}
          value={value}
          defaultValue={defualtValue}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={(e, vv) => {
            onChangeVal(vv as number);
          }}
        />
      </Box>
    </Box>
  );
}

export default TextAligments;
