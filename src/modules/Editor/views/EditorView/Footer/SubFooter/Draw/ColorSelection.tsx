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
import EditorContext from '../../../context/EditorContext';
import CustomColorPicker from './CustomColorPicker';

type Tabs = 'TextStyles' | 'Heading';

interface Props {
  selectedPenColor: string;
  setSelectedPenColor: (color: string) => void;
}

function ColorSelection(props: Props) {
  const classes = useStyles();
  const {selectedPenColor, setSelectedPenColor} = props;
  const [I, setSelectedTab] = useState<Tabs>('Heading');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // const { selectedObjectsConfig, onBold, onItalic, onChangeColor } = useContext(EditorContext);

  const onChangeColor = useCallback(
    debounce((hex: string) => {
      setSelectedPenColor(hex);
    }, 50),
    [setSelectedPenColor],
  );

  return (
    <Box className={classes.colorSectionWrapper}>
      <Typography variant="subtitle2" gutterBottom color={'white'}>
        Color
      </Typography>
      <>
        <Box
          style={{background: selectedPenColor}}
          className={classes.colorPicker}
          onClick={event => {
            setAnchorEl(event.currentTarget as any);
          }}
        ></Box>
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
          <CustomColorPicker defaultColor={selectedPenColor} onChange={onChangeColor} />
        </Popover>
      </>
    </Box>
  );
}

export default ColorSelection;
