import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { TestType, Categories, BottomMenuType } from '../../../../definitions/types/index';
import { Button, Box, IconButton, Fab, Typography } from '@mui/material';
import { useStyles } from './styles';
import { InfoOutlined, InvertColorsOutlined, ArrowBackIos } from '@mui/icons-material';
import ActionButton from './ActionButton';
import EditorContext from '../../context/EditorContext';
import clsx from 'clsx';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SubFooter from './SubFooter';
import useWindowDimensions from 'hooks/useWindowDimensions';
import useEditorActions from 'modules/Editor/actions/useEditorActions';

interface Action {
  id: Categories;
  name: string;
  iconSrc: string;
  onClick: () => void;
}

function ActionMenu() {
  const classes = useStyles();
  const { selectedCategory, bottomMenu, onSelectBottomMenuType, onSelectCategory, getSelectedObjects, setShowRightMenu } = useContext(EditorContext);
  const { width, height } = useWindowDimensions();
  const { bottomMenuVisibility, onSetRightMenu } = useEditorActions();


  const Actions: Action[] = [
    {
      id: 'Uploads',
      name: 'Uploads',
      iconSrc: 'assets/icons/uploads.svg',
      onClick: () => { },
    },
    {
      id: 'Texts',
      name: 'Texts',
      iconSrc: 'assets/icons/text.svg',
      onClick: () => { },
    },
    {
      id: 'Elements',
      name: 'Elements',
      iconSrc: 'assets/icons/elements.svg',
      onClick: () => { },
    },
    {
      id: 'Graphics',
      name: 'Graphics',
      iconSrc: 'assets/icons/graphics.svg',
      onClick: () => { },
    },
    {
      id: 'Draw',
      name: 'Draw',
      iconSrc: 'assets/icons/draw.svg',
      onClick: () => { },
    },
  ];

  const handleBottonMenuVisibility = (menu: BottomMenuType) => {
    bottomMenuVisibility(menu);
    onSelectBottomMenuType(menu);
  };

  const isSubMenu = useMemo(() => {
    if (
      selectedCategory === 'Texts' ||
      selectedCategory === 'Draw' ||
      selectedCategory === 'Graphics'
    ) {
      return true;
    } else {
      return false;
    }
  }, [selectedCategory]);

  const handleHorizontalMenu = (e: any) => {
    onSelectBottomMenuType('CircularMenu');
  }

  const renderFooterMenu = useMemo(() => {
    if (
      (((width ?? 0) > 700 && (height ?? 0) > 450) || (width ?? 0) < 650) &&
      selectedCategory &&
      isSubMenu &&
      (!(selectedCategory === 'Draw') &&
        getSelectedObjects().length)
    ) {
      return (
        <>
          {(width ?? 0) <= 700 && (height ?? 0) >= 450 ? <Box display={bottomMenu === 'CircularMenu' ? 'none' : 'flex'}
            className={classes.leftBottom}
            justifyContent={'center'}
            flexDirection={'column'}
            onClick={e => handleHorizontalMenu(e)}>
            <Box width={66} height={66}
              borderRadius={'50%'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              className={classes.moreButton}
              onClick={() => {
                bottomMenuVisibility('CircularMenu');
                onSelectBottomMenuType('CircularMenu');
                onSelectCategory(undefined);
              }}
            >+</Box>
          </Box> : null}

          <Box
            width={(selectedCategory === 'Graphics' ? '780px' : '850px')}
            className={clsx(classes.actionMenu, { isSubMenu: true })}
            style={{ border: "2px solid gray" }}
          >
            <SubFooter />
          </Box>
        </>
      );
    } else {
      return (
        <>
          {(width ?? 0) <= 700 && (height ?? 0) >= 450 ? (
            <Box
              display={bottomMenu === 'CircularMenu' ? 'none' : 'flex'}
              className={classes.leftBottom}
              justifyContent={'center'}
              flexDirection={'column'}
              onClick={(e) => handleHorizontalMenu(e)}
              position={'fixed'}
            >
              <img src='./assets/images/tshirt.png' width={'60px'} className={classes.bottomLeftPic} alt="t-shirt" />
            </Box>
          ) : null}
          <Box className={clsx(classes.actionMenu, { isSubMenu: false })}>
            <Box ml={2}>
              <ActionButton
                name="Template"
                iconSrc="assets/icons/templates.svg"
                onClick={() => {
                  if (selectedCategory === 'Templates') {
                    onSelectCategory(undefined);
                    handleBottonMenuVisibility('CircularMenu')

                  } else {
                    onSetRightMenu(true);
                    setShowRightMenu(true);
                    onSelectCategory('Templates');
                  }
                }}
                selected={selectedCategory === 'Templates'}
              />
            </Box>

            <Box m={'0px 28px'} gap={1}>
              {Actions.map((action, index) => {
                return (
                  <ActionButton
                    key={index}
                    name={action.name}
                    iconSrc={action.iconSrc}
                    onClick={() => {
                      if (selectedCategory === action.id) {
                        onSelectCategory(undefined);
                        handleBottonMenuVisibility('CircularMenu')

                      } else {
                        onSetRightMenu(true);
                        setShowRightMenu(true);
                        onSelectCategory(action.id);
                      }
                      action.onClick();
                    }}
                    selected={selectedCategory === action.id}
                  />
                );
              })}
            </Box>

            <Box mr={2}>
              <ActionButton
                name="Printing Types"
                iconSrc="assets/icons/printingTypes.svg"
                onClick={() => {
                  onSetRightMenu(true);
                  setShowRightMenu(true);
                  onSelectCategory('PrintingTypes');
                }}
                selected={selectedCategory === 'PrintingTypes'}
              />
            </Box>
            {((width ?? 0) <= 700 || (height ?? 0) <= 450) ? <Box mr={2}>
              <Box width={50} height={50}
                borderRadius={'50%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                className={classes.moreButton}
                onClick={() => {
                  bottomMenuVisibility('CircularMenu');
                  onSelectBottomMenuType('CircularMenu');
                  onSelectCategory(undefined);
                }}
              >+</Box>
            </Box> : null
            }
          </Box>
        </>
      );
    }
  }, [Actions, classes, getSelectedObjects, isSubMenu, onSelectCategory, selectedCategory]);

  return <>{renderFooterMenu}</>;
}

export default ActionMenu;
