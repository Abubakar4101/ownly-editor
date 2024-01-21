import React, {useEffect, useMemo, useState} from 'react';
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
  Typography,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {ReactSVG} from 'react-svg';
import {ChromePicker} from 'react-color';
import {PenTypes} from './index';

type Tabs = 'TextStyles' | 'Heading';

interface Props {
  selectedPenType?: PenTypes;
  selectedPenWight: number;
  setSelectedPenWight: (wight: number) => void;
}

export const WightsOptions = {
  Pencil: [
    {id: '2', value: 2},
    {id: '4', value: 4},
    {id: '6', value: 6},
    {id: '8', value: 8},
    {id: '10', value: 10},
  ],
  Circle: [
    {id: '2', value: 12},
    {id: '4', value: 14},
    {id: '6', value: 16},
    {id: '8', value: 18},
    {id: '20', value: 20},
    {id: '22', value: 22},
    {id: '24', value: 24},
  ],
  Marker: [
    {id: '30', value: 30},
    {id: '32', value: 32},
    {id: '34', value: 34},
    {id: '36', value: 36},
    {id: '38', value: 38},
    {id: '40', value: 40},
    {id: '42', value: 42},
  ],
  Easer: [{id: '2', value: 2}],
};

function BorderWight(props: Props) {
  const {selectedPenType, selectedPenWight, setSelectedPenWight} = props;
  const classes = useStyles();
  const [I, setSelectedTab] = useState<Tabs>('Heading');

  const wightsOptions = useMemo(() => {
    return (selectedPenType && WightsOptions[selectedPenType]) || [{id: '2', value: 2}];
  }, [selectedPenType]);

  // useEffect(() => {
  //   setSelectedPenWight((wightsOptions[0] && wightsOptions[0].value) || 0);
  // }, [setSelectedPenWight, wightsOptions]);

  return (
    <Box className={classes.borderSectionWrapper}>
      <Typography variant="subtitle2" gutterBottom color={'white'} mb={1}>
        Border Wight
      </Typography>
      <FormControl fullWidth variant="filled" size="small">
        <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Select
            labelId="borderWight"
            id="borderWight"
            defaultValue={(wightsOptions[0] && wightsOptions[0].value) || 2}
            onChange={event => {
              setSelectedPenWight(event.target.value as number);
            }}
            renderValue={value => {
              return (
                <Box sx={{display: 'flex', gap: 2}}>
                  <ReactSVG src={'./assets/icons/DrawMenu/wights.svg'} />
                  {value}
                </Box>
              );
            }}
            className={classes.borderSelectBox}
          >
            {wightsOptions.map((wight, index) => {
              return (
                <MenuItem style={{color: 'white'}} key={index} value={wight.value}>
                  {wight.value}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}

export default BorderWight;
