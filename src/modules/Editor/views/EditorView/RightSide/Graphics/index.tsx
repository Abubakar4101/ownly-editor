import React, {useEffect, useMemo, useState} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';

import ShapesTab from './ShapesTab';
import IconsTab from './IconsTab';

type Tabs = 'Illustrations' | 'ArtWorks';

function TextMenu() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Illustrations');
  const [searchValue, setSearchValue] = useState<string>('');

  const classes = useStyles();

  const renderTab = useMemo(() => {
    switch (selectedTab) {
      default:
      case 'Illustrations':
        return <ShapesTab />;
      case 'ArtWorks':
        return <IconsTab />;
    }
  }, [selectedTab]);

  return (
    <Box>
      <Box className={classes.topMenuWrapper}>
        <Button
          className={clsx(classes.catButton, {active: selectedTab === 'Illustrations'})}
          variant="text"
          onClick={() => {
            setSelectedTab('Illustrations');
          }}
        >
          Illustrations
        </Button>
        <Button
          className={clsx(classes.catButton, {active: selectedTab === 'ArtWorks'})}
          variant="outlined"
          onClick={() => {
            setSelectedTab('ArtWorks');
          }}
        >
          Art Works
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
