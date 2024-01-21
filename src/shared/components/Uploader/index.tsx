import React, {useState} from 'react';
import ImageUploading, {ImageListType, ImageType} from 'react-images-uploading';
import {useTranslation} from 'react-i18next';
import {useStyles} from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

interface Props {
  image?: string;
  submitImageData: (imageData: any) => void;
}
const Uploader = (props: Props) => {
  const {image, submitImageData} = props;
  const {t} = useTranslation();
  const classes = useStyles();

  const [images, setImages] = useState<ImageType[]>(
    image
      ? [
          {
            dataURL: image,
          },
        ]
      : [],
  );
  console.log('images', images);

  const maxNumber = 1;
  const onChange = (imageList: ImageListType, addUpdateIndex?: Array<number>) => {
    // addUpdateIndex = 0;
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
    submitImageData(imageList[0].data_url);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        width: '150px',
        height: '150px',
      }}
    >
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
          onImageUpdate,
        }: {
          imageList: ImageListType;
          onImageUpload: () => void;
          onImageUpdate: (index: number) => void;
        }) => (
          // write your building UI
          <div className={classes.imageItemBtnWrapper}>
            <div
              key={0}
              className={classes.imageItem}
              onClick={() => {
                imageList.length > 0 ? onImageUpdate(0) : onImageUpload();
              }}
            >
              {imageList.length > 0 ? (
                <>
                  <img
                    style={{width: '100%', height: '100%', borderRadius: '50px'}}
                    src={imageList[0].data_url || image}
                    alt=""
                  />
                </>
              ) : (
                <>
                  <div className={classes.imageDiv}>
                    {<AddPhotoAlternateIcon className={classes.imageIcon} />}
                    {/* <p style={{fontSize: '4mm', color: 'rgba(0,0,0,.85)'}}>{t('general.upload')}</p> */}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
export default Uploader;

// var texture = new BABYLON.Texture('data:my_image_name', scene, true,
// 						true, BABYLON.Texture.BILINEAR_SAMPLINGMODE,
// 						null, null, image, true);
