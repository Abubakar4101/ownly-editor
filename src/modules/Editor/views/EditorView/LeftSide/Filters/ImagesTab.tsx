import React, {useContext, useEffect, useState} from 'react';
import {useInStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import useWindowDimensions from 'hooks/useWindowDimensions';
import EditorContext from '../../context/EditorContext';
import useEditorActions from 'modules/Editor/actions/useEditorActions';

export interface Image {
  id: fabric.IGrayscaleFilter;
  src: string;
  selected: boolean;
}

interface Props {
  allImages: Image[];
  onSelectImage: (image: Image) => void;
  selectedImage?: Image;
}

function ImagesTab(props: Props) {
  const {allImages, selectedImage, onSelectImage} = props;
  const classes = useInStyles();
  const {width, height} =useWindowDimensions();
  const {onSelectCategory} = useContext(EditorContext);
  const {onSetRightMenu} = useEditorActions();


  return (
    <Box className="furniture">
      {allImages.map((img: Image, index: number) => {
        return (
          <Box
            className={clsx(classes.imageButton, {
              selected: img.selected || img.id === (selectedImage && selectedImage.id),
            })}
            key={`${index}`}
            width={300}
          >
            <img
              width={'100%'}
              src={img.src}
              alt={`Image ${index}`}
              onClick={() => {
                onSelectImage(img);
                (((width ?? 0) < 700) || ((height ?? 0) < 450)) && onSelectCategory(undefined)
                onSetRightMenu(true)
              }}
              // draggable
              // onDragStart={e => {
              //   e.dataTransfer.setData('text', `${img.src}`);
              //   e.currentTarget.style.opacity = '0.5'; // Set opacity when dragging starts
              // }}
              // onDragEnd={e => {
              //   e.currentTarget.style.opacity = '1'; // Reset opacity when dragging ends
              // }}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default ImagesTab;
