import React, {useEffect, useState, useContext, useCallback} from 'react';
import {useStyles} from './HeadingBox/styles';
import {
  Box,
  Switch,
  Button,
  FormControl,
  FilledInput,
  TextField,
  Input,
  Fab,
  Typography,
} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';
import useWindowDimensions from 'hooks/useWindowDimensions';
import useEditorActions from 'modules/Editor/actions/useEditorActions';

export const FontFamilies = [
  {id: 'arial', name: 'Arial'},
  {id: 'impact', name: 'Impact'},
  {id: 'monaco', name: 'Monaco'},
  {id: 'optima', name: 'Optima'},
  {id: 'comic sans ms', name: 'Comic Sans MS'},
  {id: 'helvetica', name: 'Helvetica'},
  {id: 'myriad pro', name: 'Myriad Pro'},
  {id: 'delicious', name: 'Delicious'},
  {id: 'verdana', name: 'Verdana'},
  {id: 'georgia', name: 'Georgia'},
  {id: 'courier', name: 'Courier'},
  {id: 'hoefler text', name: 'Hoefler Text'},
  {id: 'plaster', name: 'Plaster'},
  {id: 'engagement', name: 'Engagement'},
];

function TextStyles() {
  const [searchValue, setSearchValue] = useState<string>('');
  const {selectedObjectsConfig, onSelectBottomMenuType,elementType, onSelectCategory, onChangeFontFamily, onAddText} =
    useContext(EditorContext);
  const {width, height} = useWindowDimensions();
  const classes = useStyles();
  const {onSetRightMenu, bottomMenuVisibility} = useEditorActions();

  const handleOnSelectFontFamily = useCallback(
    (fontFamilyId: string) => {
      if (elementType) {
        onChangeFontFamily(fontFamilyId);
      } else {
        onAddText('Text', {heading: 'h1', fontFamilyId});
      }
    },
    [elementType, onAddText, onChangeFontFamily],
  );

  return (
    <Box>
      {FontFamilies.map((fontFamily, index) => {
        return (
          <Box
            key={index}
            className={clsx(classes.headingBox, {
              selected:
                elementType === 'i-text' && fontFamily.id === selectedObjectsConfig.fontFamily,
            })}
            onClick={() => {
              handleOnSelectFontFamily(fontFamily.id);
              (((width ?? 0) < 700) || ((height ?? 0) < 450)) && onSelectCategory(undefined)
              onSetRightMenu(true)
              bottomMenuVisibility('CircularMenu');
    onSelectBottomMenuType('CircularMenu');

            }}
          >
            <Typography variant={'subtitle1'} style={{fontFamily: fontFamily.id}} gutterBottom>
              {selectedObjectsConfig.text || fontFamily.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default TextStyles;
