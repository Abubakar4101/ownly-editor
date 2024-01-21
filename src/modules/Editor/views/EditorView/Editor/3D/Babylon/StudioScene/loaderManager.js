import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import * as BABYLONGUI from 'babylonjs-gui';

export default class LoaderManager {
  constructor(sceneManager) {
    this.game = sceneManager.game;
    this.scene = sceneManager.scene;
    this.sceneManager = sceneManager;
  }

  loadModelById(modelId, onFinish, configData) {
    //Load Model
    const assetsManager = new BABYLON.AssetsManager(this.scene);
    const model_task = assetsManager.addMeshTask(
      'model_task',
      '',
      `${window.location.origin}/models/`,
      `${'Tshirt02'}.gltf`,
    );
    BABYLON.material;
    model_task.onSuccess = task => {
      const modelMesh = task.loadedMeshes.find(mesh => mesh.id === '__root__');
      for (let j = 0; j < task.loadedMeshes.length; j++) {
        const mesh = task.loadedMeshes[j];
        if (mesh.getTotalVertices() > 0) {
          //if it's mesh
          this.sceneManager.mirror.renderList.push(mesh);
          this.sceneManager.shadowGenerator.getShadowMap().renderList.push(mesh);
          this.sceneManager.shadowGenerator.addShadowCaster(mesh, true);

          //remove mats in slides
          const isFound = this.sceneManager.selectedModelConfig.sides.find(
            side => side.value === mesh.name,
          );
          if (isFound) {
            mesh.material.albedoTexture.dispose();
          }
        }
      }
      modelMesh.scaling = new BABYLON.Vector3(1, 1, -1);

      //Adjust init Opts for
      this.sceneManager.currentModel = modelMesh;
      this.sceneManager.assignScaleAnimation(modelMesh);

      onFinish(); //on ALL Done
    };

    assetsManager.onProgress = (remainingCount, totalCount, lastFinishedTask) => {
      this.game.engine.loadingUIText = `loading Assets ${remainingCount} out of ${totalCount} items still need to be loaded.`;
    };

    assetsManager.onFinish = tasks => {
      // console.log("disable Loading bar");
    };
    // Start loading
    assetsManager.useDefaultLoadingScreen = false;
    assetsManager.load();
  }
}
