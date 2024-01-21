import React, {useEffect, useMemo, useState, useContext} from 'react';
import {useStyles} from './styles';
import {Box, Switch} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import Header from 'shared/components/Header';
import {RenderMode} from 'modules/Editor/definitions/types';
import clsx from 'clsx';
import EditorContext from '../../context/EditorContext';

import SideProperties from './SideProperties';

function SidesFooter() {
  const [selectedRenderMode, setSelectedRenderMode] = useState<RenderMode>('2DMODE');
  const {selectedCategory} = useContext(EditorContext);

  const classes = useStyles();

  const renderTab = useMemo(() => {
    switch (selectedCategory) {
      default:
        return (
          <Box className={clsx(classes.sidesFooterWrapper, {text: true})}>
            <SideProperties />
          </Box>
        );
    }
  }, [classes, selectedCategory]);

  return <>{renderTab}</>;
}

export default SidesFooter;
