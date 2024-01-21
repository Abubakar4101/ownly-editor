import * as BABYLON from 'babylonjs';
import {ModelConfig, SideTypes} from '../../../utilities';

//for controling sock Faces
export const faceTypeEnum = {
  frontFace: 'frontFace', //frontFace
  backFace: 'backFace', //backFace
  leftFace: 'leftFace', //leftFace
  rightFace: 'rightFace', //rightFace
};

export const getSideModelName = (
  modelConfing: ModelConfig,
  selectedSideId: keyof typeof SideTypes,
) => {
  const {id, sides} = modelConfing;
  let meshName = '';
  switch (id) {
    default:
    case 'Tshirt':
      const selectedSide = sides.find(side => side.id === selectedSideId);
      if (!selectedSide) {
        return;
      }
      meshName = selectedSide.value;
      break;
    case 'Cup':
      break;
  }
  return meshName;
};
