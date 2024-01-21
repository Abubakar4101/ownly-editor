import React, {useEffect, useMemo, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Switch} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import Header from 'shared/components/Header';
import {RenderMode} from 'modules/Editor/definitions/types';
import clsx from 'clsx';
import EditorContext from '../../../context/EditorContext';

import DrawMenu from './Draw';
import PrintingTypesMenu from './PrintingTypes';
import TextProperties from './TextProperties';
import GraphicsProperties from './GraphicsPro';

function SubFooter() {
  const [selectedRenderMode, setSelectedRenderMode] = useState<RenderMode>('2DMODE');
  const {selectedCategory} = useContext(EditorContext);

  const classes = useStyles();

  const renderTab = useMemo(() => {
    switch (selectedCategory) {
      case 'Draw':
        return (
          // <Box className={clsx(classes.subFooterWrapper)}>
          <DrawMenu />
          // </Box>
        );
      case 'PrintingTypes':
        return (
          <Box className={clsx(classes.subFooterWrapper)}>
            <PrintingTypesMenu />
          </Box>
        );
      case 'Texts':
        return (
          // <Box className={clsx(classes.subFooterWrapper, {text: true})}>
          <TextProperties />
          // </Box>
        );
      case 'Graphics':
        return (
          // <Box className={clsx(classes.subFooterWrapper, {graphics: true})}>
          <GraphicsProperties />
          // </Box>
        );

      default:
        return <></>;
    }
  }, [classes, selectedCategory]);

  return <>{renderTab}</>;
}

export default SubFooter;
