export type ModelType = 'Tshirt' | 'Cup';
//   'Tshirt' = 'tshirt',
//   'Cup' = 'cup',
// }

export enum SideTypes {
  'FRONT' = 'FRONT',
  'LEFT' = 'LEFT',
  'RIGHT' = 'RIGHT',
  'BACK' = 'BACK',
}

export interface Config3D {
  alpha: number;
  beta: number;
  radius: number;
  canvasRatio: string;
}

export interface Side {
  id: keyof typeof SideTypes;
  name: string;
  iconSrc: string;
  configs: Config3D;
  value: string;
}

export interface ModelConfig {
  id: ModelType;
  sides: Side[];
}

export type ModelsConfigsType = {
  [key in ModelType]: ModelConfig;
};
