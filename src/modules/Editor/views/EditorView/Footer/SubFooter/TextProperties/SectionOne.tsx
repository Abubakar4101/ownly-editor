import React, {useEffect, useMemo, useState, useContext} from 'react';
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
  Fab,
} from '@mui/material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {ReactSVG} from 'react-svg';
import {ChromePicker} from 'react-color';
import EditorContext from '../../../context/EditorContext';
import {Add, Remove} from '@mui/icons-material';
import {FontFamilies} from '../../../LeftSide/TextMenu/TextStyles';

type Tabs = 'TextStyles' | 'Heading';

function SectionOne() {
  const classes = useStyles();
  const [I, setSelectedTab] = useState<Tabs>('Heading');
  const {selectedObjectsConfig, onChangeFontFamily, onChangeFontSize} = useContext(EditorContext);

  return (
    <Box className={classes.borderSectionWrapper}>
      <FormControl fullWidth variant="filled" size="small">
        <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
            <Select
              labelId="fontFamliy"
              id="fontFamliy"
              style={{width: '164px'}}
              value={selectedObjectsConfig.fontFamily}
              onChange={e => {
                const {target} = e;
                onChangeFontFamily(target.value);
              }}
              variant="filled"
              className={classes.borderSelectBox}
            >
              {FontFamilies.map(font => {
                return (
                  <MenuItem
                    style={{color: 'white', fontFamily: font.id}}
                    key={font.id}
                    value={font.id}
                  >
                    {font.name}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box ml={1} display={'flex'} justifyContent={'center'}>
            <Fab
              color="primary"
              aria-label="water"
              size="large"
              variant="extended"
              className={clsx(classes.fontButSize, {right: true})}
              onClick={() => {
                onChangeFontSize(false);
              }}
            >
              <Remove style={{fontSize: '15px'}} />
            </Fab>
            <Box className={classes.fontBox}>{selectedObjectsConfig.fontSize}</Box>
            <Fab
              color="primary"
              aria-label="water"
              size="large"
              variant="extended"
              className={clsx(classes.fontButSize, {left: true})}
              onClick={() => {
                onChangeFontSize(true);
              }}
            >
              <Add style={{fontSize: '15px'}} />
            </Fab>
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
}

export default SectionOne;
