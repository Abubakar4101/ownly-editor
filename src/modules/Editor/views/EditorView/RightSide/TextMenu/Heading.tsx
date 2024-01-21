import React, {useEffect, useState} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';

function Heading() {
  const [searchValue, setSearchValue] = useState<string>('');

  const classes = useStyles();

  return <Box>{'Heading'}</Box>;
}

export default Heading;
