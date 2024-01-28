import React, { useEffect, useState, useContext, useMemo } from 'react';
import { Box, Switch, Fab } from '@mui/material';
import { useStyles } from '../styles';
import AddIcon from '@mui/icons-material/Add';
import Header from 'shared/components/Header';
import { ReactSVG } from 'react-svg';
import RightArcButton from './RightArcButton';
import EditorContext from '../../context/EditorContext';
import { Categories } from 'modules/Editor/definitions/types';
import useWindowDimensions from 'hooks/useWindowDimensions'
import { TramRounded, Tune } from '@mui/icons-material';
import useEditorActions from 'modules/Editor/actions/useEditorActions';

export type ArcAction = 'Bold' | 'FontChange' | 'RemoveBG' | Categories;
interface ArcButton {
  id: number;
  degree: string;
  transValue: string;
  iconSrc: string;
  rotateValue: string;
  buttonText: string;
}

export function RightMenu() {
  const [selected, setSelected] = useState<string | null>(null);
  const { width, height } = useWindowDimensions();

  const {
    elementType,
    selectedRenderMode,
    selectedObjectsConfig,
    selectedCategory,
    bottomMenu,
    onSelectCategory,
    onSelectBottomMenuType,
    getImagesFilters,
    setShowRightMenu,
    removeImageBackground,
    onBold,
    onSelectSubCategory,
    onDraw,
  } = useContext(EditorContext);
  const { bottomMenuVisibility, onSetRightMenu } = useEditorActions();

  useEffect(() => {
    if (selectedRenderMode === '3DMODE') {
      setSelected(null);
    }
  }, [selectedRenderMode]);

  const screenHeight = window.innerHeight;
  const getActionsByType = useMemo((): {
    id: ArcAction;
    name: string;
    isSelected?: boolean;
    iconSrc: string;
    onClick: () => void;
  }[] => {
    setSelected(null);
    switch (elementType) {
      case 'i-text':
        return [
          {
            id: 'Bold',
            name: 'Bold',
            iconSrc: 'assets/arcMenu/bold.svg',
            isSelected: selectedObjectsConfig.isBold,
            onClick: () => {
              onBold();
            },
          },
          {
            id: 'FontChange',
            name: 'Font Change',
            iconSrc: 'assets/arcMenu/text.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              onSelectSubCategory('TextStyles');
            },
          },
          {
            id: 'Uploads',
            name: 'Upload Images',
            iconSrc: 'assets/arcMenu/cloud-up.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Uploads' ? onSelectCategory(undefined) : onSelectCategory('Uploads');
            },

          },
          {
            id: 'Draw',
            name: 'Draw',
            iconSrc: 'assets/arcMenu/pencil.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Draw' ? onSelectCategory(undefined) : onSelectCategory('Draw');
            },
          },
          {
            id: 'Bold',
            name: 'My Save Images',
            iconSrc: 'assets/arcMenu/mySavedImage.svg',
            onClick: () => { },
          },
        ];
      case 'image':
        return [
          {
            id: 'RemoveBG',
            name: 'Remove Background',
            iconSrc: 'assets/arcMenu/removeBg.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              removeImageBackground();
            },
          },
          {
            id: 'Filters',
            name: 'Add Color Filters',
            iconSrc: 'assets/arcMenu/colorFilters.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Filters' ? onSelectCategory(undefined) : onSelectCategory('Filters');

            },
          },
          {
            id: 'Bold',
            name: 'Upload Images',
            iconSrc: 'assets/arcMenu/cloud-up.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Uploads' ? onSelectCategory(undefined) : onSelectCategory('Uploads');

            },
          },
          {
            id: 'Bold',
            name: 'Draw',
            iconSrc: 'assets/arcMenu/pencil.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Draw' ? onSelectCategory(undefined) : onSelectCategory('Draw');

              onDraw();
            },
          },
          {
            id: 'Bold',
            name: 'My Save Images',
            iconSrc: 'assets/arcMenu/mySavedImage.svg',
            onClick: () => { },
          },
        ];
      default:
        return [
          {
            id: 'Uploads',
            name: 'Upload Images',
            iconSrc: 'assets/arcMenu/cloud-up.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Uploads' ? onSelectCategory(undefined) : onSelectCategory('Uploads');

            },
          },
          {
            id: 'Graphics',
            name: 'Add Shape',
            iconSrc: 'assets/arcMenu/shape.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Graphics' ? onSelectCategory(undefined) : onSelectCategory('Graphics');


            },
          },
          {
            id: 'Texts',
            name: 'Add Text',
            iconSrc: 'assets/arcMenu/text.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Texts' ? onSelectCategory(undefined) : onSelectCategory('Texts');

            },
          },
          {
            id: 'Draw',
            name: 'Pencil1',
            iconSrc: 'assets/arcMenu/pencil.svg',
            onClick: () => {
              onSetRightMenu(true);
              setShowRightMenu(true);
              selectedCategory === 'Draw' ? onSelectCategory(undefined) : onSelectCategory('Draw');

              onDraw();
            },
          },
          {
            id: 'Templates',
            name: 'My Saved image',
            iconSrc: 'assets/arcMenu/mySavedImage.svg',
            onClick: () => { },
          },
        ];
    }
  }, [
    elementType,
    onBold,
    onDraw,
    onSelectCategory,
    onSelectSubCategory,
    removeImageBackground,
    selectedObjectsConfig,
  ]);

  const rightArcButtons: ArcButton[] = [
    {
      id: 0,
      degree: (width ?? 0) > 700 && (height ?? 0) > 450 ? '-20' : '0',
      transValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '22' : (width ?? 0) <= 650 ? '-6px 125px' : '-3px 125px',
      iconSrc: 'assets/arcMenu/cloud-up.svg',
      rotateValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '1' : '0',
      buttonText: 'UPload image',
    },
    {
      id: 1,
      degree: (width ?? 0) > 700 && (height ?? 0) > 450 ? '-10' : '0',
      transValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '54' : (width ?? 0) <= 650 ? '-17px 67px' : '-20px 61px',
      iconSrc: 'assets/arcMenu/shape.svg',
      rotateValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '7' : '7',
      buttonText: 'Add Shape',
    },
    {
      id: 2,
      degree: '0',
      transValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '72' : (width ?? 0) <= 650 ? '-1px 41px' : '-3px 30px',
      iconSrc: 'assets/arcMenu/text.svg',
      rotateValue: '0',
      buttonText: 'Add Text',
    },
    {
      id: 3,
      degree: (width ?? 0) > 700 && (height ?? 0) > 450 ? '10' : '0',
      transValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '71' : (width ?? 0) <= 650 ? '15px 67px' : '13px 60px',
      iconSrc: 'assets/arcMenu/pencil.svg',
      rotateValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '12' : '12',
      buttonText: 'Pencil',
    },
    {
      id: 4,
      degree: (width ?? 0) > 700 && (height ?? 0) > 450 ? '20' : '0',
      transValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '54' : (width ?? 0) <= 650 ? '10px 125px' : '0px 125px',
      iconSrc: 'assets/arcMenu/mySavedImage.svg',
      rotateValue: (width ?? 0) > 700 && (height ?? 0) > 450 ? '-15' : '-15',
      buttonText: 'My Saved image',
    },
  ];
  const handleButtonClick = (id: string) => {
    setSelected(id);
  };
  const classes = useStyles();
  const bgImageSmall = {
    backgroundImage: 'url(assets/arcMenu/rightArcSmall.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'bottom center',

  };
  const bgImage = {
    backgroundImage: 'url(assets/arcMenu/rightArc.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'top left',

  };
  // if (screenHeight < 750) {
  //   const temp = [
  //     {
  //       id: 0,
  //       degree: '-20',
  //       transValue: '7',
  //       iconSrc: 'assets/arcMenu/cloud-up.svg',
  //       rotateValue: '19',
  //       buttonText: 'UPload image',
  //     },
  //     {
  //       id: 1,
  //       degree: '-10',
  //       transValue: '24',
  //       iconSrc: 'assets/arcMenu/shape.svg',
  //       rotateValue: '7',
  //       buttonText: 'Add Shape',
  //     },
  //     {
  //       id: 2,
  //       degree: '0',
  //       transValue: '34',
  //       iconSrc: 'assets/arcMenu/text.svg',
  //       rotateValue: '0',
  //       buttonText: 'Add Text',
  //     },
  //     {
  //       id: 3,
  //       degree: '10',
  //       transValue: '36',
  //       iconSrc: 'assets/arcMenu/pencil.svg',
  //       rotateValue: '-12',
  //       buttonText: 'Pencil',
  //     },
  //     {
  //       id: 4,
  //       degree: '20',
  //       transValue: '28',
  //       iconSrc: 'assets/arcMenu/mySavedImage.svg',
  //       rotateValue: '-15',
  //       buttonText: 'My Saved image',
  //     },
  //   ];
  //   rightArcButtons = temp;
  // } else if (screenHeight > 750 && screenHeight < 800) {
  //   const temp = [
  //     {
  //       id: 0,
  //       degree: '-20',
  //       transValue: '16',
  //       iconSrc: 'assets/arcMenu/cloud-up.svg',
  //       rotateValue: '19',
  //       buttonText: 'UPload image',
  //     },
  //     {
  //       id: 1,
  //       degree: '-10',
  //       transValue: '37',
  //       iconSrc: 'assets/arcMenu/shape.svg',
  //       rotateValue: '7',
  //       buttonText: 'Add Shape',
  //     },
  //     {
  //       id: 2,
  //       degree: '0',
  //       transValue: '49',
  //       iconSrc: 'assets/arcMenu/text.svg',
  //       rotateValue: '0',
  //       buttonText: 'Add Text',
  //     },
  //     {
  //       id: 3,
  //       degree: '10',
  //       transValue: '50',
  //       iconSrc: 'assets/arcMenu/pencil.svg',
  //       rotateValue: '-12',
  //       buttonText: 'Pencil',
  //     },
  //     {
  //       id: 4,
  //       degree: '20',
  //       transValue: '38',
  //       iconSrc: 'assets/arcMenu/mySavedImage.svg',
  //       rotateValue: '-15',
  //       buttonText: 'My Saved image',
  //     },
  //   ];
  //   rightArcButtons = temp;
  // }
  const [showButtons, setShowButtons] = useState(false);
  const handleBottonMenuVisibility = () => {
    bottomMenuVisibility('HorizontalMenu');
    onSelectBottomMenuType('HorizontalMenu');
  };

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setTimeout(() => {
        setShowButtons(true);
      }, 200); // Adjust the delay time as needed (in milliseconds)
    };
    image.src = 'assets/arcMenu/rightArc.svg';
  }, []);

  const getArcButtons = useMemo(() => {
    return getActionsByType.map((action, index) => {
      return {
        ...rightArcButtons[index],
        id: action.id,
        buttonText: action.name,
        iconSrc: action.iconSrc,
        isSelected: action.isSelected || false,
        onClick: action.onClick,
      };
    });
  }, [getActionsByType, rightArcButtons]);

  return (
    <Box display={bottomMenu === 'CircularMenu' ? 'flex' : 'none'} flexDirection={'column'} alignItems={'center'}>
      <Box display={'flex'} alignContent={'end'} className={classes.arcMenu} style={(width ?? 0) > 700 && (height ?? 0) > 450 ? bgImage : bgImageSmall}>
        {showButtons &&
          getArcButtons.map((btn, index) => (
            <RightArcButton
              key={index}
              degree={btn.degree}
              transValue={btn.transValue}
              iconSrc={btn.iconSrc}
              rotateValue={btn.rotateValue}
              buttonText={btn.buttonText}
              animationDelay={index * 80} // Adjust the delay time as needed (in milliseconds)
              onClick={() => {
                handleButtonClick(btn.id);
                btn.onClick();
              }}
              selected={selected === btn.id}
              activated={btn.isSelected}
            />
          ))}

      </Box>

      {((width ?? 0) <= 700 || (height ?? 0) <= 450) && <Box width={100} height={100}
        display={'flex'}
        justifyContent={'center'}
        className={classes.moreButton}
        onClick={handleBottonMenuVisibility}
      >+</Box>}
    </Box>

  );
}
