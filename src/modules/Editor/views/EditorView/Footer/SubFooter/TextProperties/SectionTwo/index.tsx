import React, {useEffect, useMemo, useState, useContext, useCallback} from 'react';
import {useStyles} from '../styles';
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
import EditorContext from '../../../../context/EditorContext';
import {Text, Canvas} from 'fabric/fabric-impl';
import debounce from 'lodash.debounce';

import CustomColorPicker from './CustomColorPicker';

type Tabs = 'TextStyles' | 'Heading';

function SectionTwo() {
  const classes = useStyles();
  const [I, setSelectedTab] = useState<Tabs>('Heading');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {selectedObjectsConfig, onBold, onItalic, onChangeColor} = useContext(EditorContext);

  const handleOnChangeColor = useCallback(
    debounce((hex: string) => {
      onChangeColor(hex);
    }, 50),
    [onChangeColor],
  );

  return (
    <Box className={classes.borderSectionWrapper}>
      <FormControl fullWidth variant="filled" size="small">
        <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box display={'flex'} justifyContent={'center'}>
            <>
              <Fab
                color="primary"
                aria-label="water"
                size="large"
                variant="circular"
                className={clsx(classes.fontButStyle, {right: true})}
                onClick={event => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <ReactSVG src={'assets/icons/textColor.svg'} style={{fontSize: '0px'}} />
              </Fab>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={() => {
                  setAnchorEl(null);
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

            <Fab
              color="inherit"
              aria-label="water"
              size="large"
              variant="extended"
              className={clsx(classes.fontButStyle, {
                center: true,
                selected: selectedObjectsConfig.isBold,
              })}
              onClick={() => {
                onBold();
              }}
            >
              <ReactSVG src={'assets/icons/bold.svg'} style={{fontSize: '22px'}} />
            </Fab>
            <Fab
              color="primary"
              aria-label="water"
              size="large"
              variant="extended"
              className={clsx(classes.fontButStyle, {
                left: true,
                selected: selectedObjectsConfig.isItalic,
              })}
              onClick={() => {
                onItalic();
                //   onChange(searchValue);
              }}
            >
              <ReactSVG src={'assets/icons/italic.svg'} style={{fontSize: '20px'}} />
            </Fab>
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
}

export default SectionTwo;
