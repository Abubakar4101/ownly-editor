import React, {useEffect, useState, useContext, useCallback} from 'react';
import {useInStyles} from './styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';

export interface Image {
  id: string;
  src: string;
}

interface Props {
  allImages: Image[];
}

function ImagesTab(props: Props) {
  const {allImages} = props;
  const classes = useInStyles();
  const {onUploadImage} = useContext(EditorContext);

  const onSelectImage = useCallback(
    (imgSrc: string) => {
      onUploadImage(imgSrc);
    },
    [onUploadImage],
  );

  return (
    <Box className="furniture">
      {allImages.map((img: Image, index: number) => {
        return (
          <Box className={clsx('.my', classes.uploadImage)} key={img.id}>
            <img
              width={'100%'}
              src={img.src}
              alt={`Image ${index}`}
              draggable
              onDragStart={e => {
                e.dataTransfer.setData('text', `${img.src}`);
                e.currentTarget.style.opacity = '0.5'; // Set opacity when dragging starts
              }}
              onDragEnd={e => {
                e.currentTarget.style.opacity = '1'; // Reset opacity when dragging ends
              }}
              onClick={() => {
                onSelectImage(img.src);
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default ImagesTab;
