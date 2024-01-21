import {Variant} from '@mui/material/styles/createTypography';
import {PenTypes} from 'modules/Editor/views/EditorView/Footer/SubFooter/Draw';

export interface TestType {
  name: string;
}

export const OuterId = 'EXSIT';

export type RenderMode = '2DMODE' | '3DMODE';
export type SubCategories = 'TextStyles' | 'Pincel';

export type Categories =
  | 'Templates'
  | 'Uploads'
  | 'Texts'
  | 'Elements'
  | 'Graphics'
  | 'Draw'
  | 'PrintingTypes'
  | 'Filters';

//
export type HeadingOptions = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
export interface TextOptions {
  heading?: Variant;
  fontFamilyId?: string;
}

export interface ObjectConfig {
  isBold: boolean;
  isItalic: boolean;
  color: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  dashedBorders: boolean;
  fontSize: number;
  fontFamily: string;
  lineHeight: number;
  textAlign: string;
  opacity: number;
  text: string;
}

export type ElementTypes = 'i-text' | 'image' | 'rect' | 'circle' | 'triangle' | 'polygon' | 'path';

export interface DrawOptions {
  type: PenTypes;
  color: string;
  width: number;
}

export type ShapeTypes =
  | 'rectangle'
  | 'circle'
  | 'triangle'
  | 'star5'
  | 'star4'
  | 'star8'
  | 'pentagram'
  | 'hex';
export type BorderStyle = 'Dash' | 'Solid';
