import React, {useEffect, useMemo, useState} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';

type Tabs = 'Shapes' | 'Icons';

function PrintingTypes() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Shapes');
  const [searchValue, setSearchValue] = useState<string>('');

  const classes = useStyles();

  return <Box>{'PrintingTypes'}</Box>;
}

export default PrintingTypes;
