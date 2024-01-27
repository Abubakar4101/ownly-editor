import React, {useEffect, useState, useContext, useCallback} from 'react';
import {useStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import EmojiPicker, {Theme} from 'emoji-picker-react';
import EditorContext from '../../context/EditorContext';
import useWindowDimensions from 'hooks/useWindowDimensions';
import useEditorActions from 'modules/Editor/actions/useEditorActions';


function IconsTab() {
  const [searchValue, setSearchValue] = useState<string>('');
  const {onSelectSvgIcon, onSelectCategory} = useContext(EditorContext);
  const {width, height} = useWindowDimensions();

  const classes = useStyles();
  const {onSetRightMenu} = useEditorActions();


  // Function to convert image URL to base64
  const imageUrlToBase64 = useCallback((imageUrl: string) => {
    return new Promise((resolve, reject) => {
      // Fetch the image as a blob
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          // Read the blob as a data URL
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
        .catch(reject);
    });
  }, []);

  const onClick = useCallback(
    (IconString: string) => {
      imageUrlToBase64(IconString).then((base64: any) => {
        // console.log('base64', base64);
        onSelectSvgIcon(base64);
        (((width ?? 0) < 700) || ((height ?? 0) < 450)) && onSelectCategory(undefined)
        onSetRightMenu(true);
      });
    },
    [imageUrlToBase64, onSelectSvgIcon],
  );
  return (
    <Box className={classes.wrrapper}>
      <div>
        <EmojiPicker
          onEmojiClick={emoji => {
            console.log('e', emoji);
            onClick(emoji.imageUrl);
          }}
          height={'100%'}
          width={'100%'}
          theme={Theme.DARK}
          skinTonesDisabled
        />
      </div>
    </Box>
  );
}

export default IconsTab;
