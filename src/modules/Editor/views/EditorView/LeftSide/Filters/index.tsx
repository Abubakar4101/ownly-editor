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

type Tabs = 'Illustrations' | 'ArtWorks';

// const Images: Image[] = [
//   {id: '0', src: img1},
//   {id: '1', src: './images/key2.png'},
//   {id: '2', src: './images/key3.png'},
//   {id: '3', src: './images/key4.jpg'},
//   {id: '4', src: './images/key5.png'},
// ];

function Filters() {
  const [selectedTab, setSelectedTab] = useState<Tabs>('Illustrations');
  const [searchValue, setSearchValue] = useState<string>('');
  const {selectedCategory, getImagesFilters, applyImageFilter} = useContext(EditorContext);
  const [allImages, setAllImages] = useState<Image[]>([]);
  const [selectedImage, setSelectedImage] = useState<Image>();

  const classes = useStyles();

  useEffect(() => {
    const imageData: {id: fabric.IGrayscaleFilter; src: string; selected: boolean}[] =
      getImagesFilters();

    setAllImages(
      imageData.map(({id, src, selected}, index): Image => {
        return {
          id: id,
          src,
          selected,
        };
      }),
    );
  }, []);

  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
      <Box
        className={clsx(
          classes.rightSideWrapper,
          classes.boxWrapper,
          {
            uploadMenu: selectedCategory === 'Uploads',
          },
          classes.imagesListWrapper,
        )}
      >
        <Box ml={3} my={3} mb={2} mr={2}>
          <ImagesTab
            allImages={allImages}
            selectedImage={selectedImage}
            onSelectImage={image => {
              applyImageFilter(image?.id);
              setSelectedImage(image);
            }}
          />
        </Box>
      </Box>
      {/* <Box display={'flex'} justifyContent={'flex-end'} my={2}>
        <Button
          variant="contained"
          disabled={!selectedImage}
          onClick={() => {
            if (selectedImage) {
              applyImageFilter(selectedImage?.id);
            }
          }}
        >
          Apply
        </Button>
      </Box> */}
    </Box>
  );
}

export default Filters;
