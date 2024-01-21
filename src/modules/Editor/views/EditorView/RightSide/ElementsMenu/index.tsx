import React, {useEffect, useMemo, useState} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';

import ShapesTab from './ShapesTab';
import IconsTab from './IconsTab';

type Tabs = 'Shapes' | 'Icons';

function TextMenu() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Shapes');
  const [searchValue, setSearchValue] = useState<string>('');

  const classes = useStyles();

  const renderTab = useMemo(() => {
    switch (selectedTab) {
      default:
      case 'Shapes':
        return <ShapesTab />;
      case 'Icons':
        return <IconsTab />;
    }
  }, [selectedTab]);

  return (
    <Box>
      <Box className={classes.topMenuWrapper}>
        <Button
          className={clsx(classes.catButton, {active: selectedTab === 'Shapes'})}
          variant="text"
          onClick={() => {
            setSelectedTab('Shapes');
          }}
        >
          Shapes
        </Button>
        <Button
          className={clsx(classes.catButton, {active: selectedTab === 'Icons'})}
          variant="outlined"
          onClick={() => {
            setSelectedTab('Icons');
          }}
        >
          Icons
        </Button>
      </Box>
      <Box mx={3} my={3} mb={2}>
        <SearchBox
          searchValue={searchValue}
          onChange={v => {
            console.log('000', v);
            setSearchValue(v);
          }}
        />
        {renderTab}
      </Box>
    </Box>
  );
}

export default TextMenu;
