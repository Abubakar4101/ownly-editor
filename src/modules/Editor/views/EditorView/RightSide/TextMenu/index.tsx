import React, {useEffect, useMemo, useState} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';

import TextStyles from './TextStyles';
import Heading from './Heading';
type Tabs = 'TextStyles' | 'Heading';

function ElementsMenu() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Heading');
  const [searchValue, setSearchValue] = useState<string>('');

  const classes = useStyles();

  const renderTab = useMemo(() => {
    switch (selectedTab) {
      default:
      case 'TextStyles':
        return <TextStyles />;
      case 'Heading':
        return <Heading />;
    }
  }, [selectedTab]);

  return (
    <Box>
      <Box className={classes.topMenuWrapper}>
        <Button
          className={clsx(classes.catButton, {active: selectedTab === 'Heading'})}
          variant="outlined"
          onClick={() => {
            setSelectedTab('Heading');
          }}
        >
          Heading
        </Button>
        <Button
          className={clsx(classes.catButton, {active: selectedTab === 'TextStyles'})}
          variant="text"
          onClick={() => {
            setSelectedTab('TextStyles');
          }}
        >
          TextStyles
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

export default ElementsMenu;
