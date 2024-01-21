import React, {useEffect, useMemo, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Switch} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import Header from 'shared/components/Header';
import {RenderMode} from 'modules/Editor/definitions/types';
import clsx from 'clsx';
import EditorContext from '../context/EditorContext';

import TextMenu from './TextMenu';
import ElementsMenu from './ElementsMenu';
import Graphics from './Graphics';

function RightSide() {
  const [selectedRenderMode, setSelectedRenderMode] = useState<RenderMode>('2DMODE');
  const {selectedCategory} = useContext(EditorContext);

  const classes = useStyles();

  const renderTab = useMemo(() => {
    switch (selectedCategory) {
      case 'Templates':
        return <>{'templates'}</>;
      case 'Uploads':
        return <>{'Uploads'}</>;
      case 'Texts':
        return <TextMenu />;
      case 'Elements':
        return <ElementsMenu />;
      case 'Graphics':
        return <Graphics />;
      default:
        return <></>;
    }
  }, [selectedCategory]);

  const isBorderedTab = useMemo(() => {
    switch (selectedCategory) {
      case 'Texts':
      case 'Elements':
      case 'Graphics':
        return true;
      default:
        false;
    }
  }, [selectedCategory]);

  return (
    <Box className={clsx(classes.rightSideWrapper, isBorderedTab && classes.boxWrapper)}>
      {renderTab}
    </Box>
  );
}

export default RightSide;
