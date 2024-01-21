import React, {useEffect, useMemo, useState, useContext, useCallback} from 'react';
import {Box, TextField, Typography, Slider} from '@mui/material';
import {
  Add,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignRight,
} from '@mui/icons-material';
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

function LineHeight({title, defualtValue, onChange}: Props) {
  const classes = useStyles();
  const [value, setValue] = useState<number>(defualtValue);

  const onChangeVal = useCallback(
    (value: number) => {
      setValue(value);
      onChange(value === 0 ? 0.5 : Number(value) / 1 || 1);
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
            min: 0.5, // Set your minimum limit here
            max: 10,
          }}
          className={classes.input}
          style={{
            width: '72px',
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
          min={0.5}
          max={10}
          step={0.1}
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

export default LineHeight;
