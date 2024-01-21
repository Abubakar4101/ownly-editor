import React, {useEffect, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';

import HeadingBox, {Props as Heading} from './HeadingBox';

const headingList: Heading[] = [
  {id: 'h1', value: 'h1. Heading'},
  {id: 'h2', value: 'h2. Heading'},
  {id: 'h3', value: 'h3. Heading'},
  {id: 'h4', value: 'h4. Heading'},
  {id: 'h5', value: 'h5. Heading'},
  {id: 'h6', value: 'h6. Heading'},
];
function HeadingList() {
  const [searchValue, setSearchValue] = useState<string>('');
  const {onAddText} = useContext(EditorContext);

  const classes = useStyles();

  return (
    <Box>
      {headingList.map((heading: Heading) => {
        return <HeadingBox key={heading.id} {...heading} />;
      })}
    </Box>
  );
}

export default HeadingList;
