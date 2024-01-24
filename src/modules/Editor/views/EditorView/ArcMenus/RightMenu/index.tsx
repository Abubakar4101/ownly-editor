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
import { TramRounded } from '@mui/icons-material';
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
  const { width } = useWindowDimensions();

  const {
    elementType,
    selectedRenderMode,
    selectedObjectsConfig,
    selectedCategory,
    bottomMenu,
    onSelectCategory,
    onSelectBottomMenuType,
    getImagesFilters,
    removeImageBackground,
    onBold,
    onSelectSubCategory,
    onDraw,
  } = useContext(EditorContext);
  const{bottomMenuVisibility} = useEditorActions();

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
              onSelectSubCategory('TextStyles');
            },
          },
          {
            id: 'Uploads',
            name: 'Upload Images',
            iconSrc: 'assets/arcMenu/cloud-up.svg',
            onClick: () => {
              selectedCategory === 'Uploads' ? onSelectCategory(undefined) : onSelectCategory('Uploads');
            },
          },
          {
            id: 'Draw',
            name: 'Draw',
            iconSrc: 'assets/arcMenu/pencil.svg',
            onClick: () => {
              // setTimeout(() => {
                selectedCategory === 'Draw' ? onSelectCategory(undefined) : onSelectCategory('Draw');
              onDraw();
              // }, 1000);
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
              removeImageBackground();
            },
          },
          {
            id: 'Filters',
            name: 'Add Color Filters',
            iconSrc: 'assets/arcMenu/colorFilters.svg',
            onClick: () => {
              selectedCategory === 'Filters' ? onSelectCategory(undefined) : onSelectCategory('Filters');
              // getImagesFilters();
            },
          },
          {
            id: 'Bold',
            name: 'Upload Images',
            iconSrc: 'assets/arcMenu/cloud-up.svg',
            onClick: () => {
              selectedCategory === 'Uploads' ? onSelectCategory(undefined) : onSelectCategory('Uploads');
            },
          },
          {
            id: 'Bold',
            name: 'Draw',
            iconSrc: 'assets/arcMenu/pencil.svg',
            onClick: () => {
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
              selectedCategory === 'Uploads' ? onSelectCategory(undefined) : onSelectCategory('Uploads');
            },
          },
          {
            id: 'Graphics',
            name: 'Add Shape',
            iconSrc: 'assets/arcMenu/shape.svg',
            onClick: () => {
              selectedCategory === 'Graphics' ? onSelectCategory(undefined) : onSelectCategory('Graphics');
            },
          },
          {
            id: 'Texts',
            name: 'Add Text',
            iconSrc: 'assets/arcMenu/text.svg',
            onClick: () => {
              selectedCategory === 'Texts' ? onSelectCategory(undefined) : onSelectCategory('Texts');
            },
          },
          {
            id: 'Draw',
            name: 'Pencil1',
            iconSrc: 'assets/arcMenu/pencil.svg',
            onClick: () => {
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
      degree: (width ?? 0) > 700 ? '-20' : '0',
      transValue: (width ?? 0) > 700 ? '22' : '85',
      iconSrc: 'assets/arcMenu/cloud-up.svg',
      rotateValue: (width ?? 0) > 700 ? '1' : '0',
      buttonText: 'UPload image',
    },
    {
      id: 1,
      degree: (width ?? 0) > 700 ? '-10' : '0',
      transValue: (width ?? 0) > 700 ? '54' : '45',
      iconSrc: 'assets/arcMenu/shape.svg',
      rotateValue: (width ?? 0) > 700 ? '7' : '7',
      buttonText: 'Add Shape',
    },
    {
      id: 2,
      degree: '0',
      transValue: (width ?? 0) > 700 ? '72' : '20',
      iconSrc: 'assets/arcMenu/text.svg',
      rotateValue: '0',
      buttonText: 'Add Text',
    },
    {
      id: 3,
      degree: (width ?? 0) > 700 ? '10' : '0',
      transValue: (width ?? 0) > 700 ? '71' : '45',
      iconSrc: 'assets/arcMenu/pencil.svg',
      rotateValue: (width ?? 0) > 700 ? '12' : '12',
      buttonText: 'Pencil',
    },
    {
      id: 4,
      degree: (width ?? 0) > 700 ? '20' : '0',
      transValue: (width ?? 0) > 700 ? '54' : '85',
      iconSrc: 'assets/arcMenu/mySavedImage.svg',
      rotateValue: (width ?? 0) > 700 ? '-15' : '-15',
      buttonText: 'My Saved image',
    },
  ];
  const handleButtonClick = (id: string) => {
    setSelected(id);
  };
  const classes = useStyles();
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
      <Box display={'flex'} alignContent={'end'} className={classes.arcMenu} style={(width ?? 0) > 700 ? bgImage : undefined}>
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

      {(width ?? 0) <= 700 && <Box width={100} height={100}
        borderRadius={'50%'}
        display={'flex'}
        justifyContent={'center'}
        className={classes.moreButton}
        onClick={handleBottonMenuVisibility}
      >+</Box>}
    </Box>

  );
}
