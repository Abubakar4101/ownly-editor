import React, {useEffect, useContext, useState} from 'react';
import {useStyles} from '../styles';
import {Box, Switch, Button, FormControl, FilledInput, TextField, Input, Fab} from '@mui/material';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import clsx from 'clsx';
import SearchBox from 'shared/components/SearchBox';
import {RenderMode} from 'modules/Editor/definitions/types';
import EditorContext from '../../context/EditorContext';
import {v4 as uuidv4} from 'uuid';
import ImagesTab, {Image} from './ImagesTab';
import UploaderButton from './uploader';
import {img1} from './imagesTest';

type Tabs = 'Illustrations' | 'ArtWorks';

const Images: Image[] = [
  {id: '0', src: img1},
  {id: '1', src: './images/key2.png'},
  {id: '2', src: './images/key3.png'},
  {id: '3', src: './images/key4.jpg'},
  {id: '4', src: './images/key5.png'},
];

function UploadsMenu() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Illustrations');
  const [searchValue, setSearchValue] = useState<string>('');
  const {selectedCategory, onUploadImage} = useContext(EditorContext);
  const [allImages, setAllImages] = useState<Image[]>(Images);

  const classes = useStyles();

  return (
    <Box height={'100%'} display={'flex'} justifyContent={'flex-start'} flexDirection={'column'}>
      <UploaderButton
        submitImageData={(imageBase: string) => {
          setAllImages((prevImages: Image[]) => {
            return [{id: uuidv4(), src: imageBase}, ...prevImages];
          });
          // onUploadImage(imageBase);
        }}
      />
      <Box
        className={clsx(
          // classes.rightSideWrapper,
          classes.boxWrapper,
          {
            uploadMenu: selectedCategory === 'Uploads',
          },
          classes.imagesListWrapper,
        )}
      >
        <Box mx={1} my={1} mb={2}>
          <ImagesTab allImages={allImages} />
        </Box>
      </Box>
    </Box>
  );
}

export default UploadsMenu;
