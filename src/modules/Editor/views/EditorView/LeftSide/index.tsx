import React, { useEffect, useMemo, useState, useContext } from 'react';
import { useStyles } from './styles';
import { Box, Switch } from '@mui/material';
import { ShoppingBasket, Redo, Undo } from '@mui/icons-material';
import Header from 'shared/components/Header';
import { RenderMode } from 'modules/Editor/definitions/types';
import clsx from 'clsx';
import EditorContext from '../context/EditorContext';

import TextMenu from './TextMenu';
import Elements from './Elements';
import Graphics from './Graphics';
import Uploads from './Uploads';
import Filters from './Filters';
import useWindowDimensions from 'hooks/useWindowDimensions';
import useEditorActions from 'modules/Editor/actions/useEditorActions';

function LeftSide() {
  const [selectedRenderMode, setSelectedRenderMode] = useState<RenderMode>('2DMODE');
  const { selectedCategory, onSelectBottomMenuType, showRightMenu, onSelectCategory } = useContext(EditorContext);
  const { bottomMenuVisibility } = useEditorActions();

  const { width, height } = useWindowDimensions();
  const classes = useStyles();

  const renderTab = useMemo(() => {
    switch (selectedCategory) {
      case 'Templates':
        return <></>;
      case 'Uploads':
        return <Uploads />;
      case 'Texts':
        return <TextMenu />;
      case 'Elements':
        return <Elements />;
      case 'Graphics':
        return <Graphics />;
      case 'Filters':
        return <Filters />;

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

  return showRightMenu ? (
    <>
      {(width ?? 0) <= 650 && (height ?? 0) >= 450 && <Box
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 495,
          top: 0,
          left: 0,
          backgroundColor: '#282729',
          opacity: 0.5,
        }}
        onClick={() => {
          bottomMenuVisibility('CircularMenu');
          onSelectBottomMenuType('CircularMenu');
          onSelectCategory(undefined)
        }}></Box>}
      <Box
        className={clsx(
          classes.rightSideWrapper,
          classes.translateAnimation,
          isBorderedTab && classes.boxWrapper,
          {
            uploadMenu: selectedCategory === 'Uploads',
          }
        )}
      >
        {!((width ?? 0) > 700 && (height ?? 0) > 450) && <img
          onClick={() => {
            bottomMenuVisibility('CircularMenu');
            onSelectBottomMenuType('CircularMenu');
            onSelectCategory(undefined)
          }
          }
          src='./assets/images/Rectangular.png' width={'60px'} />}
        {renderTab}
      </Box>

    </>
  ) : null
}

export default LeftSide;
