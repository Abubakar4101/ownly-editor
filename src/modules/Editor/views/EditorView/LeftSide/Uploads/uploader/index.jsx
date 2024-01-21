import React from 'react';
import ImageUploading from 'react-images-uploading';
import {Button, Box} from '@mui/material';
import {useInStyles} from '../styles';
import {ShoppingBasket, Redo, Undo, KeyboardArrowRight} from '@mui/icons-material';
import {useTranslation} from 'react-i18next';
import './styles.css';

const UploaderButton = props => {
  const {submitImageData} = props;
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    addUpdateIndex = 0;
    setImages(imageList);
    submitImageData(imageList[0].data_url);
  };

  const {t} = useTranslation();
  const classesIn = useInStyles();

  return (
    <ImageUploading
      multiple={false}
      acceptType={['jpg', 'gif', 'png']}
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <Button
          variant="contained"
          className={classesIn.uploadButton}
          onClick={() => {
            imageList.length > 0 ? onImageUpdate(0) : onImageUpload();
          }}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <ShoppingBasket style={{fontSize: '32px'}} />
            Upload image
          </Box>
        </Button>
      )}
    </ImageUploading>
  );
};
export default UploaderButton;
