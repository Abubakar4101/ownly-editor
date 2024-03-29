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
        return (
          <>
            <Box mx={3} my={3} mb={2}>
              <SearchBox
                searchValue={searchValue}
                onChange={v => {
                  console.log('000', v);
                  setSearchValue(v);
                }}
              />
              <ShapesTab />
            </Box>
          </>
        );
      case 'Icons':
        return <IconsTab />;
    }
  }, [searchValue, selectedTab]);

  return (
    <Box style={{
      backgroundColor: '#282729',
      padding: '10px 30px',
      border: '2px solid gray'
    }} borderRadius={'20px 20px 0 0'} height={'100%'}>
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
      <Box height={'calc(100% - 72px)'} className={classes.scrollBar}>
        {renderTab}
      </Box>
    </Box>
  );
}

export default TextMenu;
