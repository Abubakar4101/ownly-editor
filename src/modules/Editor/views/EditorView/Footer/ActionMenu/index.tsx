import React, {useEffect, useState, useContext, useCallback, useMemo} from 'react';
import {Redirect} from 'react-router-dom';
import {TestType, Categories} from '../../../../definitions/types/index';
import {Button, Box, IconButton, Fab, Typography} from '@mui/material';
import {useStyles} from './styles';
import {InfoOutlined, InvertColorsOutlined, ArrowBackIos} from '@mui/icons-material';
import ActionButton from './ActionButton';
import EditorContext from '../../context/EditorContext';
import clsx from 'clsx';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SubFooter from './SubFooter';

interface Action {
  id: Categories;
  name: string;
  iconSrc: string;
  onClick: () => void;
}

function ActionMenu() {
  const classes = useStyles();
  const {selectedCategory, onSelectCategory, getSelectedObjects} = useContext(EditorContext);

  const Actions: Action[] = [
    {
      id: 'Uploads',
      name: 'Uploads',
      iconSrc: 'assets/icons/uploads.svg',
      onClick: () => {},
    },
    {
      id: 'Texts',
      name: 'Texts',
      iconSrc: 'assets/icons/text.svg',
      onClick: () => {},
    },
    {
      id: 'Elements',
      name: 'Elements',
      iconSrc: 'assets/icons/elements.svg',
      onClick: () => {},
    },
    {
      id: 'Graphics',
      name: 'Graphics',
      iconSrc: 'assets/icons/graphics.svg',
      onClick: () => {},
    },
    {
      id: 'Draw',
      name: 'Draw',
      iconSrc: 'assets/icons/draw.svg',
      onClick: () => {},
    },
  ];

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

  const renderFooterMenu = useMemo(() => {
    if (
      selectedCategory &&
      isSubMenu &&
      (selectedCategory === 'Draw' || getSelectedObjects().length)
    ) {
      return (
        <Box className={clsx(classes.actionMenu, {isSubMenu: true})}>
          <Box
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            position={'relative'}
            width={'70px'}
            height={'90px'}
            style={{backgroundColor: '#24232500'}}
          >
            <img src="./footer/backButton.png" height={'100%'}></img>
            <Box
              position={'absolute'}
              width={'100%'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              style={{cursor: 'pointer'}}
              onClick={() => {
                onSelectCategory(undefined);
              }}
            >
              <ArrowBackIos color="secondary" style={{fontSize: '8px'}} />
              <Typography
                ml={0.6}
                color={'white'}
                width={'38px'}
                fontSize={'9px'}
                fontWeight={600}
                lineHeight={'10px'}
                variant="caption"
              >
                Back to menu
              </Typography>
            </Box>
          </Box>
          <SubFooter />
        </Box>
      );
    } else {
      return (
        <Box className={clsx(classes.actionMenu, {isSubMenu: false})}>
          <Box ml={2}>
            <ActionButton
              name="Template"
              iconSrc="assets/icons/templates.svg"
              onClick={() => {
                onSelectCategory('Templates');
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
                    } else {
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
                onSelectCategory('PrintingTypes');
              }}
              selected={selectedCategory === 'PrintingTypes'}
            />
          </Box>
        </Box>
      );
    }
  }, [Actions, classes, getSelectedObjects, isSubMenu, onSelectCategory, selectedCategory]);

  return <>{renderFooterMenu}</>;
}

export default ActionMenu;
