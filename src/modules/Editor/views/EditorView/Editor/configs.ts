import {ModelType, ModelsConfigsType, SideTypes} from './utilities';

export const modelsConfigs: ModelsConfigsType = {
  Tshirt: {
    id: 'Tshirt',
    sides: [
      {
        id: 'FRONT',
        name: 'Front',
        iconSrc: 'assets/icons/sides/t-shirt/frontSide.svg',
        configs: {
          alpha: 1.5,
          beta: 1.4,
          radius: 31,
          canvasRatio: '1/1.14',
        },
        value: 'PhotoFront',
      },
      {
        id: 'BACK',
        name: 'Back',
        iconSrc: 'assets/icons/sides/t-shirt/backSide.svg',
        configs: {
          alpha: 4.725,
          beta: 1.4,
          radius: 31,
          canvasRatio: '1/1.14',
        },
        value: 'PhotoBack',
      },
      {
        id: 'LEFT',
        name: 'Left',
        iconSrc: 'assets/icons/sides/t-shirt/leftSide.svg',
        configs: {
          alpha: 6.2,
          beta: 1,
          radius: 21,
          canvasRatio: '1/1.5',
        },
        value: 'PhotoSleeves.001_primitive1',
      },
      {
        id: 'RIGHT',
        name: 'Right',
        iconSrc: 'assets/icons/sides/t-shirt/rightSide.svg',
        configs: {
          alpha: 3.292,
          beta: 1.07,
          radius: 21,
          canvasRatio: '1/1.5',
        },
        value: 'PhotoSleeves.001_primitive0',
      },
    ],
  },
  Cup: {
    id: 'Cup',
    sides: [
      {
        id: 'FRONT',
        name: 'front',
        iconSrc: 'assets/icons/sides/t-shirt/rightSide.svg',
        configs: {
          alpha: 3.27,
          beta: 1.4,
          radius: 31,
          canvasRatio: '1.5/1',
        },
        value: '',
      },
    ],
  },
};
