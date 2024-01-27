import React, {useEffect, useState, useContext} from 'react';
import {useStyles} from './styles';
import {
  Box,
  Typography,
  Button,
  FormControl,
  FilledInput,
  TextField,
  Input,
  Fab,
  // Variant,
} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import {Variant} from '@mui/material/styles/createTypography';
import EditorContext from '../../../context/EditorContext';
import useWindowDimensions from 'hooks/useWindowDimensions';
import useEditorActions from 'modules/Editor/actions/useEditorActions';

export interface Props {
  id: Variant;
  value: string;
}

function HeadingBox(props: Props) {
  const {id, value} = props;
  const [searchValue, setSearchValue] = useState<string>('');
  const classes = useStyles();
  const {onAddText, onSelectCategory} = useContext(EditorContext);
  const {width, height} = useWindowDimensions();
  const {onSetRightMenu} = useEditorActions();


  return (
    <Box
      className={classes.headingBox}
      onClick={() => {
        onAddText('Text', {heading: id});
        (((width ?? 0) < 700) || ((height ?? 0) < 450)) && onSelectCategory(undefined)
        onSetRightMenu(true)
      }}
    >
      <Typography variant={id} gutterBottom>
        {value}
      </Typography>
    </Box>
  );
}

export default HeadingBox;
