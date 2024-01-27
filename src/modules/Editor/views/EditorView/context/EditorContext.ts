import React, {LegacyRef, createRef} from 'react';
import {
  BorderStyle,
  Categories,
  BottomMenuType,
  DrawOptions,
  ElementTypes,
  ObjectConfig,
  RenderMode,
  ShapeTypes,
  SubCategories,
  TextOptions,
} from '../../../definitions/types/index';
import {Engine} from 'babylonjs';
import {GameManager} from '../Editor/3D';
import {ModelType, SideTypes} from '../Editor/utilities';
import {Canvas, Object} from 'fabric/fabric-impl';
import {DefualtSelectedObjectsConfig} from 'modules/Editor/actions/useEditorActions';

type State = {
  fabricContainer?: LegacyRef<HTMLCanvasElement>;
  fabricCanvas?: Canvas;
  gameManager?: GameManager;
  selectedRenderMode: RenderMode;
  selectedModelType: ModelType;
  selectedSide: keyof typeof SideTypes;
  selectedCategory?: Categories;
  selectedSubCategory?: SubCategories;
  selectedObjectsConfig: ObjectConfig;
  elementType?: ElementTypes;
  isFirstUse: boolean;
  canvasColor: string;
  bottomMenu?: BottomMenuType;
  showRightMenu?: boolean;
  onSelectSvgIcon: (svgString: string) => void;
  onSelectFistSide: (side: keyof typeof SideTypes) => void;
  onSetGameManager: (gameManager: GameManager) => void;
  onSelectedRenderMode: (newRenderMode: RenderMode) => void;
  onSetSelectedModelType: (modelType: ModelType) => void;
  onSetSelectedSide: (side: keyof typeof SideTypes) => void;
  onSelectCategory: (newCategory: Categories | undefined) => void;
  onSelectBottomMenuType: (newType: BottomMenuType | undefined) => void,
  setShowRightMenu: (show: boolean) => void;
  onSelectSubCategory: (newCategory: SubCategories | undefined) => void;
  removeImageBackground: () => void;
  onInit2DEditor: () => void;
  getSelectedObjects: () => fabric.Object[];
  onAddText: (text: string, options: TextOptions) => void;
  onChangeOpacity: (opacity: number) => void;
  onBold: () => void;
  onItalic: () => void;
  onChangeColor: (hexColor: string) => void;
  onChangeBorderColor: (hexColor: string) => void;
  onChangeFontSize: (increase: boolean) => void;
  onChangeFontFamily: (fontFamily: string) => void;
  onChangeLineHeight: (value: number) => void;
  onChangeFontAligment: (aligmentId: string) => void;
  onChangeBorderStyle: (borderStyle: BorderStyle) => void;
  onChangeBorderWight: (borderWidth: number) => void;
  onChangeBorderRadius: (borderRadius: number) => void;
  onUploadImage: (imageBase: string) => void;
  isDrawingMode: () => boolean;
  onDraw: (drawOptions?: DrawOptions) => void;
  cancelDrawing: () => void;
  getImagesFilters: () => {id: fabric.IGrayscaleFilter; src: string; selected: boolean}[];
  applyImageFilter: (selectedId: fabric.IGrayscaleFilter) => void;
  drawShapeById: (shapeId: ShapeTypes) => void;
  onApplyImage: () => void;
  onSubmitData: () => void;
};

const EditorContext = React.createContext<State>({
  selectedRenderMode: '2DMODE',
  selectedModelType: 'Tshirt',
  selectedSide: 'FRONT',
  selectedObjectsConfig: DefualtSelectedObjectsConfig,
  isFirstUse: false,
  canvasColor: '#FFFFFF',
  bottomMenu: 'CircularMenu',
  showRightMenu: false,
  setShowRightMenu: (show: boolean) => {},
  onSelectSvgIcon: () => {},
  onSelectFistSide: (side: keyof typeof SideTypes) => {},
  onSetGameManager: (gameManager: GameManager) => {},
  onSelectedRenderMode: (newRenderMode: RenderMode) => {},
  onSetSelectedModelType: (modelType: ModelType) => {},
  onSetSelectedSide: (side: keyof typeof SideTypes) => {},
  onSelectCategory: (newCategory: Categories | undefined) => {},
  onSelectBottomMenuType: (newType: BottomMenuType | undefined) => {},
  onSelectSubCategory: (newSubCategory: SubCategories | undefined) => {},
  removeImageBackground: () => {},
  onInit2DEditor: () => {},
  getSelectedObjects: () => [],
  onAddText: (text: string, options: TextOptions) => {},
  onBold: () => {},
  onItalic: () => {},
  onChangeColor: (hexColor: string) => {},
  onChangeBorderColor: (hexColor: string) => {},
  onChangeFontSize: (increase: boolean) => {},
  onChangeFontFamily: (fontFamily: string) => {},
  onChangeLineHeight: (value: number) => {},
  onChangeOpacity: (opacity: number) => {},
  onUploadImage: (imageBase: string) => {},
  onChangeFontAligment: (aligmentId: string) => {},
  onChangeBorderStyle: (borderStyle: BorderStyle) => {},
  onChangeBorderWight: (borderWidth: number) => {},
  onChangeBorderRadius: (borderRadius: number) => {},
  isDrawingMode: () => false,
  onDraw: (drawOptions?: DrawOptions) => {},
  getImagesFilters: () => [],
  applyImageFilter: (selectedId: fabric.IGrayscaleFilter) => {},
  cancelDrawing: () => {},
  drawShapeById: () => {},
  onApplyImage: () => {},
  onSubmitData: () => {},
});
export default EditorContext;
