import React, {useEffect, useMemo, useState, useContext, useCallback} from 'react';
import {useStyles} from './styles';
import {Box, Divider} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import Header from 'shared/components/Header';
import {RenderMode} from 'modules/Editor/definitions/types';
import clsx from 'clsx';

import BodyTab from './Body';
import FooterTab from './Footer';

export type PrintingTypes = 'DTG' | 'UV';

function PrintingTypesTab() {
  const [selectedRenderMode, setSelectedRenderMode] = useState<RenderMode>('2DMODE');
  const [selectedType, setSelectedType] = useState<PrintingTypes>('DTG');
  const classes = useStyles();

  const handleOnSelectNewType = useCallback((newType: PrintingTypes) => {
    setSelectedType(newType);
  }, []);

  return (
    <Box className={clsx(classes.printingTypesWrraper)}>
      <BodyTab selectedType={selectedType} onSelectType={handleOnSelectNewType} />
      <Divider variant="fullWidth" className={classes.divider} />
      <FooterTab />
    </Box>
  );
}

export default PrintingTypesTab;
