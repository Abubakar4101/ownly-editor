import React, {useMemo, useContext} from 'react';
import {useStyles} from './styles';
import {Box} from '@mui/material';
import clsx from 'clsx';
import EditorContext from '../../context/EditorContext';

import SideProperties from './SideProperties';

function SidesFooter() {
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
