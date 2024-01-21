import React, {useCallback, useMemo, useState} from 'react';
import {Box} from '@mui/material';
import useEditorActions from '../../actions/useEditorActions';
import {RenderMode, Categories} from 'modules/Editor/definitions/types';
import {useStyles} from './styles';
import Header from 'shared/components/Header';
import EditorContext from './context/EditorContext';
import Footer from './Footer';
import RenderSwitch from './RenderSwitch';
import LeftSide from './LeftSide';
import Editor from './Editor';
import {LeftArcMenu, RightArcMenu} from './ArcMenus';
import {GameManager} from './Editor/3D';
import {ModelType} from './Editor/utilities';
import clsx from 'clsx';
import {ReactComponent as IconLeftArrow} from 'shared/assets/images/icons/leftArrow.svg';
import {ReactComponent as IconRightArrow} from 'shared/assets/images/icons/rightArrow.svg';
import {Canvas} from 'fabric/fabric-impl';

function EditorView() {
  const [selectedModelType, setSelectedModelType] = useState<ModelType>('Tshirt');
  const [leftArcMenuState, setLeftArcMenuState] = useState(true);
  const [rightArcMenuState, setRightArcMenuState] = useState(true);
  const classes = useStyles();

  const {
    container,
    fabricCanvas,
    gameManager,
    selectedCategory,
    selectedSubCategory,
    selectedObjectsConfig,
    selectedSide,
    elementType,
    isFirstUse,
    selectedRenderMode,
    canvasColor,
    onSelectSvgIcon,
    onChangeCanvasColor,
    setSelectedRenderMode,
    onSelectFistSide,
    onInit2DEditor,
    discardActiveObjects,
    getSelectedObjects,
    selectedElementType,
    setSelectedSide,
    setSelectedCategory,
    setSelectedSubCategory,
    removeImageBackground,
    onAddText,
    onChangeOpacity,
    setGameManager,
    onBold,
    onItalic,
    onChangeFontSize,
    onChangeFontFamily,
    onChangeLineHeight,
    onUploadImage,
    onChangeFontAligment,
    onChangeColor,
    onChangeBorderColor,
    onChangeBorderStyle,
    onChangeBorderRadius,
    onChangeBorderWight,
    onDraw,
    isDrawingMode,
    cancelDrawing,
    getImagesFilters,
    applyImageFilter,
    drawShapeById,
    onApplyImage,
    onSubmitData,
  } = useEditorActions();

  const renderLeftSideMenu = useMemo(() => {
    switch (selectedCategory) {
      case 'Templates':
      case 'Uploads':
      case 'Texts':
      case 'Elements':
      case 'Graphics':
      case 'Filters':
        return <LeftSide />;
      // return <></>;
      default:
      case 'Draw':
        return <LeftArcMenu onChangeCanvasColor={onChangeCanvasColor} />;
    }
  }, [onChangeCanvasColor, selectedCategory]);

  const renderRightSideMenu = useMemo(() => {
    switch (selectedCategory) {
      case 'Templates':
      case 'Elements':
      case 'Graphics':
        return <></>;
      case 'Draw':
      case 'Uploads':
      case 'Texts':
        return <RightArcMenu />;
      case 'Filters':
      default:
        return <RightArcMenu />;
    }
  }, [selectedCategory]);
  const handleClickLeftCollapse = useCallback(() => {
    if (selectedCategory) {
      setSelectedCategory(undefined);
      setLeftArcMenuState(!leftArcMenuState);
    }
  }, [leftArcMenuState, selectedCategory, setSelectedCategory]);

  const handleClickRightCollapse = () => {
    setRightArcMenuState(!rightArcMenuState);
  };

  return (
    <Box>
      <EditorContext.Provider
        value={{
          fabricContainer: container,
          gameManager,
          fabricCanvas,
          selectedRenderMode,
          selectedCategory,
          selectedSubCategory,
          selectedModelType,
          selectedSide,
          selectedObjectsConfig,
          elementType,
          isFirstUse,
          canvasColor,
          onSelectSvgIcon,
          onSelectFistSide,
          onInit2DEditor,
          getSelectedObjects,
          onSetSelectedModelType(modelType) {
            setSelectedModelType(modelType);
          },
          onSetSelectedSide(side) {
            if (selectedRenderMode === '2DMODE') {
              onApplyImage();
            }
            if (gameManager) {
              gameManager.studioSceneManager.changeSide(side);
            }
            setSelectedSide(side);
          },
          onSelectedRenderMode: (newRenderMode: RenderMode) => {
            setSelectedRenderMode(newRenderMode);
            setSelectedCategory(undefined);
            selectedElementType(undefined);
          },
          onSelectCategory: (newCategory: Categories | undefined) => {
            setSelectedRenderMode('2DMODE');
            setSelectedCategory(newCategory);
            setSelectedSubCategory(undefined);
            if (newCategory !== 'Filters') {
              discardActiveObjects();
            }
            if (isDrawingMode()) {
              cancelDrawing();
            }
            if (fabricCanvas) {
              (fabricCanvas as any)['category'] = newCategory;
            }
          },
          onSelectSubCategory(newCategory) {
            setSelectedSubCategory(newCategory);
          },
          onSetGameManager: (gameManager: GameManager) => {
            setGameManager(gameManager);
          },
          removeImageBackground,
          onAddText,
          onBold,
          onItalic,
          onChangeColor,
          onChangeBorderColor,
          onChangeFontSize,
          onChangeFontFamily,
          onChangeLineHeight,
          onChangeFontAligment,
          onChangeOpacity,
          onChangeBorderStyle,
          onChangeBorderRadius,
          onChangeBorderWight,
          isDrawingMode,
          onDraw,
          cancelDrawing,
          getImagesFilters,
          applyImageFilter,
          drawShapeById,
          onUploadImage,
          onApplyImage,
          onSubmitData,
        }}
      >
        <Header>{!isFirstUse && <RenderSwitch />}</Header>
        <Box className={clsx(classes.editorWrraper, {isFirstUse: isFirstUse})}>
          <>
            {selectedCategory !== 'PrintingTypes' && true && (
              <Box
                height={'100%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                minWidth={'360px'}
              >
                {true && renderLeftSideMenu}
                {!isFirstUse && (
                  <Box display={'flex'} alignItems={'center'} paddingLeft={'15px'} zIndex={111}>
                    <Box
                      display={'flex'}
                      flexDirection={'column'}
                      alignItems={'center'}
                      width={'65px'}
                      onClick={handleClickLeftCollapse}
                    >
                      <IconLeftArrow
                        className={
                          leftArcMenuState ? clsx(classes.rotateLeft) : clsx(classes.normal)
                        }
                      />
                      <Box color={'#CACCD2'} fontSize={'12px'}>
                        {leftArcMenuState ? 'Menu' : 'Arc'}
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            )}
          </>
          <>
            <Editor />
            {selectedCategory !== 'PrintingTypes' && !isFirstUse && (
              <Box display={'flex'} alignItems={'center'}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  width={'65px'}
                  onClick={handleClickRightCollapse}
                >
                  <IconRightArrow
                    className={rightArcMenuState ? clsx(classes.rotateRight) : clsx(classes.normal)}
                  />
                  <Box color={'#CACCD2'} fontSize={'12px'}>
                    {rightArcMenuState ? 'Collapse' : 'Expand'}
                  </Box>
                </Box>
              </Box>
            )}
          </>

          {selectedCategory !== 'PrintingTypes' && !isFirstUse && (
            <Box
              height={'100%'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-end'}
              minWidth={'360px'}
            >
              {rightArcMenuState && renderRightSideMenu}
            </Box>
          )}
        </Box>
        {!isFirstUse && <Footer />}
      </EditorContext.Provider>
    </Box>
  );
}

export default EditorView;
