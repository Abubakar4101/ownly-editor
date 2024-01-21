import React, {useEffect, useMemo, useState, useContext, useCallback} from 'react';
import {useStyles} from './styles';
import {Box, Switch} from '@mui/material';
import {ShoppingBasket, Redo, Undo} from '@mui/icons-material';
import Header from 'shared/components/Header';
import {OuterId, RenderMode} from 'modules/Editor/definitions/types';
import clsx from 'clsx';
import EditorContext from '../context/EditorContext';

import Editor2D from './2D';
import Editor3D from './3D';
import StartCanvas from './StartCanvas';
import PrintingTypesTab from './PrintingTypes';

function Editor() {
  const {selectedRenderMode, selectedCategory, selectedSide, elementType, isFirstUse} =
    useContext(EditorContext);

  const classes = useStyles();

  const isRenderRightSideMenu = useMemo(() => {
    switch (selectedCategory) {
      case 'Templates':
      case 'Elements':
      case 'Graphics':
        return false;
      case 'Draw':
      case 'Uploads':
      case 'Texts':
      case 'Filters':
      default:
        return true;
    }
  }, [selectedCategory]);

  const onResize = useCallback(() => {}, []);

  return (
    <Box
      // key={isRenderRightSideMenu.toString()}
      id={OuterId}
      className={clsx(classes.editorTab, {
        printingTypes: selectedCategory === 'PrintingTypes',
        rightSideMenu: isRenderRightSideMenu,
        isFirstUse: isFirstUse,
      })}
      // width={`calc(100vw - ${selectedCategory === 'PrintingTypes' ? '0vw' : isRenderRightSideMenu ? '700px' : '1000px'
      //   })`}
    >
      <Editor3D isResize={isRenderRightSideMenu} />
      {isFirstUse && <StartCanvas key={selectedSide} />}
      {selectedRenderMode === '2DMODE' && !isFirstUse && <Editor2D key={selectedSide} />}
      {selectedCategory === 'PrintingTypes' && <PrintingTypesTab />}
    </Box>
  );
}

export default Editor;
