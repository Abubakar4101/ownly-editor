import React, {useContext} from 'react';
import {useStyles} from './styles';
import {Box, FormControl, Typography, Select, MenuItem} from '@mui/material';
import {ReactSVG} from 'react-svg';
import EditorContext from '../../../context/EditorContext';

export const RoundingOptions = [
  {id: 'none', value: 0},
  {id: '2', value: 2},
  {id: '4', value: 4},
  {id: '6', value: 6},
  {id: '8', value: 8},
  {id: '10', value: 10},
  {id: '12', value: 12},
  {id: '14', value: 14},
  {id: '16', value: 16},
  {id: '18', value: 18},
  {id: '20', value: 20},
  {id: '22', value: 22},
  {id: '24', value: 24},
  {id: '26', value: 26},
];

function CornerRounding() {
  const classes = useStyles();
  const {selectedObjectsConfig, onChangeBorderRadius} = useContext(EditorContext);

  return (
    <Box className={classes.borderSectionWrapper}>
      <Typography variant="subtitle2" gutterBottom color={'white'} mb={1}>
        Corner Rounding
      </Typography>
      <FormControl fullWidth variant="filled" size="small">
        <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Select
            labelId="borderWight"
            id="borderWight"
            value={selectedObjectsConfig.borderRadius || RoundingOptions[0].value}
            onChange={event => {
              onChangeBorderRadius(event.target.value as number);
            }}
            renderValue={value => {
              return (
                <Box sx={{display: 'flex', gap: 2}}>
                  <ReactSVG src={'./assets/icons/graphics/corner.svg'} />
                  {value || 'none'}
                </Box>
              );
            }}
            className={classes.borderSelectBox}
          >
            {RoundingOptions.map((option, index) => {
              return (
                <MenuItem style={{color: 'white'}} key={index} value={option.value}>
                  {option.id}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}

export default CornerRounding;
