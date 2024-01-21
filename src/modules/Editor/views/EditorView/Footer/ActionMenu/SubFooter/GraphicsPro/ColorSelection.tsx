import React, {useContext, useCallback, useState} from 'react';
import {useStyles} from './styles';
import {
  Box,
  Switch,
  Button,
  FormControl,
  FilledInput,
  TextField,
  Input,
  Popover,
  Typography,
} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {ReactSVG} from 'react-svg';
import debounce from 'lodash.debounce';
import EditorContext from '../../../../context/EditorContext';
import CustomColorPicker from './CustomColorPicker';

type Tabs = 'TextStyles' | 'Heading';

function ColorSelection() {
  const classes = useStyles();
  const [colorAnchorEl, setColorAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [borderAnchorEl, setBorderAnchorEl] = useState<HTMLButtonElement | null>(null);
  const {selectedObjectsConfig, onBold, onItalic, onChangeColor, onChangeBorderColor} =
    useContext(EditorContext);

  const handleOnChangeColor = useCallback(
    debounce((hex: string) => {
      onChangeColor(hex);
    }, 50),
    [onChangeColor],
  );

  const handleOnChangeBorderColor = useCallback(
    debounce((hex: string) => {
      onChangeBorderColor(hex);
    }, 50),
    [onChangeBorderColor],
  );

  return (
    <Box className={classes.colorSectionWrapper}>
      <Typography variant="caption" gutterBottom color={'white'}>
        Color
      </Typography>
      <Box display={'flex'} height={'40px'} flexDirection={'row'} alignItems={'center'}>
        <>
          <Box
            style={{background: selectedObjectsConfig.color}}
            className={classes.colorPicker}
            onClick={event => {
              setColorAnchorEl(event.currentTarget as any);
            }}
          ></Box>
          <Popover
            id={colorAnchorEl ? 'simple-popover' : undefined}
            open={Boolean(colorAnchorEl)}
            anchorEl={colorAnchorEl}
            onClose={() => {
              setColorAnchorEl(null);
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <CustomColorPicker
              defaultColor={selectedObjectsConfig.color}
              onChange={handleOnChangeColor}
            />
          </Popover>
        </>
        <>
          <Box
            style={{
              border: `4px solid ${selectedObjectsConfig.borderColor}`,
              backgroundColor: 'white',
            }}
            className={classes.colorPicker}
            onClick={event => {
              setBorderAnchorEl(event.currentTarget as any);
            }}
          ></Box>
          <Popover
            id={borderAnchorEl ? 'simple-popover' : undefined}
            open={Boolean(borderAnchorEl)}
            anchorEl={borderAnchorEl}
            onClose={() => {
              setBorderAnchorEl(null);
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <CustomColorPicker
              defaultColor={selectedObjectsConfig.borderColor}
              onChange={handleOnChangeBorderColor}
            />
          </Popover>
        </>
      </Box>
    </Box>
  );
}

export default ColorSelection;
