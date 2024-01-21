import React, {useEffect, useMemo, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';

import TextStyles from './TextStyles';
import HeadingList from './Heading';
type Tabs = 'TextStyles' | 'Heading';

function ElementsMenu() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Heading');
  const [searchValue, setSearchValue] = useState<string>('');
  const {selectedSubCategory} = useContext(EditorContext);

  const classes = useStyles();

  useEffect(() => {
    if (selectedSubCategory && selectedSubCategory === 'TextStyles') {
      setSelectedTab(selectedSubCategory);
    }
  }, [selectedSubCategory]);

  const renderTab = useMemo(() => {
    switch (selectedTab) {
      default:
      case 'TextStyles':
        return <TextStyles />;
      case 'Heading':
        return <HeadingList />;
    }
  }, [selectedTab]);

  return (
    <Box display={'flex'} flexDirection={'column'} height={'100%'}>
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
      <Box display={'flex'} flexDirection={'column'} height={'calc(100% - 48px)'}>
        {/* mx={2} my={3} mb={2}> */}
        <Box my={3} mx={2} mb={2}>
          <SearchBox
            searchValue={searchValue}
            onChange={v => {
              setSearchValue(v);
            }}
          />
        </Box>
        <Box className={classes.listWrapper}>
          <Box mx={2} my={1}>
            {renderTab}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ElementsMenu;
