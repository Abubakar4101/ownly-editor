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
import {Add, Remove} from '@mui/icons-material';
import EditorContext from '../../../context/EditorContext';
import {modelsConfigs} from '../../../Editor/configs';

type Tabs = 'TextStyles' | 'Heading';

function SectionOne() {
  const classes = useStyles();
  const [I, setSelectedTab] = useState<Tabs>('Heading');
  const {selectedSide, selectedModelType, onSetSelectedSide} = useContext(EditorContext);

  const availableSides = useMemo(() => {
    const {sides} = modelsConfigs[selectedModelType];
    return sides;
  }, [selectedModelType]);

  return (
    <Box className={classes.borderSectionWrapper}>
      <FormControl fullWidth variant="filled" size="small">
        <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
            {availableSides.map(side => {
              return (
                <Fab
                  key={side.id}
                  className={clsx(classes.sideBut, {selected: selectedSide === side.id})}
                  color="primary"
                  aria-label="water"
                  size="large"
                  variant="circular"
                  onClick={() => {
                    onSetSelectedSide(side.id);
                  }}
                >
                  <ReactSVG src={side.iconSrc} />
                </Fab>
              );
            })}
          </Box>
        </Box>
      </FormControl>
    </Box>
  );
}

export default SectionOne;
