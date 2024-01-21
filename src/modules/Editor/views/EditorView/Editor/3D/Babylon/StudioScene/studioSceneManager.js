import * as BABYLON from 'babylonjs';
import * as BABYLONMaterials from 'babylonjs-materials';
import 'babylonjs-inspector';
import 'babylonjs-loaders';
import LoaderManager from './loaderManager';
import {getSideModelName} from './studioSceneModules';
import {ModelType, ModelsConfigsType, SideTypes} from '../../../utilities';
import {modelsConfigs} from '../../../configs';

const BoxWidth = 3;
const BoxLength = 6;

export default class StudioSceneManager {
  constructor(game) {
    this.game = game;
    //Main Props
    this.scene = null;
    this.studioGui = null;
    this.mainCamera = null;
    this.pipline = null;
    this.handlers = {};

    //Input Manager
    this.InputMg = {
      isDragging: false,
      currentTouchedMesh: null,
      currentSelectedMesh: null,
    };
    this.snapValue = 5.5;

    //Cam Init
    this.camInit = {
      radius: 0,
      alpha: 0,
      beta: 0,
    };
    //
    this.currentModel = null;
    this.selectedModelConfig = null;
    this.selectedSide = SideTypes.FRONT;
  }

  //#region  MainSceneProperties
  createScene(onFinish, configData) {
    const {selectedModelType} = configData;
    //Create Bts Scene
    //Create Scene
    this.scene = new BABYLON.Scene(this.game.engine);
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0000000000000001);
    this.scene.imageProcessingConfiguration.contrast = 1.35;
    this.scene.imageProcessingConfiguration.vignetteEnabled = true;

    this.scene.onPointerObservable.add(pointerInfo => {
      switch (pointerInfo.type) {
        case BABYLON.PointerEventTypes.POINTERDOWN:
          this.onPointerDown(pointerInfo.event);
          break;
        case BABYLON.PointerEventTypes.POINTERUP:
          this.onPointerUp(pointerInfo.event);
          break;
        case BABYLON.PointerEventTypes.POINTERMOVE:
          this.onPointerMove(pointerInfo.event);
          break;
        case BABYLON.PointerEventTypes.POINTERDOUBLETAP:
          break;
        case BABYLON.PointerEventTypes.POINTERWHEEL:
          this.mouseWheelHandler();
          break;
        default:
          break;
      }
    });

    //Installation
    this.createCamera();
    this.setUpEnvironMent();

    console.log('selectedModelConfig', selectedModelType);

    this.selectedModelConfig = modelsConfigs[selectedModelType];
    console.log('selectedModelConfig', this.selectedModelConfig);
    //Create LoadManager instance
    this.loaderManager = new LoaderManager(this);
    this.loaderManager.loadModelById('t-shrit', onFinish, configData); //start load mainBike

    // this.scene.debugLayer.show();
    return this.scene;
  }
  createCamera() {
    this.mainCamera = new BABYLON.ArcRotateCamera(
      'ArcCamera',
      1.45,
      1.4,
      27,
      new BABYLON.Vector3(0, 9, -0.7),
      this.scene,
    );
    this.mainCamera.attachControl(this.game.canvas, true);

    this.mainCamera.lowerRadiusLimit = 10;
    this.mainCamera.upperRadiusLimit = 36;

    this.mainCamera.lowerBetaLimit = 0.85;
    this.mainCamera.upperBetaLimit = 1.5;
    this.mainCamera.minZ = 0.2;

    this.mainCamera.wheelPrecision = 10;
    this.mainCamera.useBouncingBehavior = true;

    this.staticCamera = new BABYLON.ArcRotateCamera(
      'staticCamera',
      2.7,
      1.4,
      20,
      new BABYLON.Vector3(0, 6.5, 0),
      this.scene,
    );
  }
  setUpEnvironMent() {
    const dirLight = new BABYLON.DirectionalLight(
      'DirectionalLight',
      new BABYLON.Vector3(0, -1, 0.3),
      this.scene,
    );
    dirLight.position = new BABYLON.Vector3(3, 9, 3);

    this.alphaMaterial = new BABYLON.StandardMaterial('alphaMat', this.scene);
    this.alphaMaterial.alpha = 0;

    // ShadowGenerator
    this.shadowGenerator = new BABYLON.ShadowGenerator(512, dirLight);
    this.shadowGenerator.useBlurExponentialShadowMap = true;
    this.shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_HIGH;
    // this.shadowGenerator.forceBackFacesOnly = true;
    // this.shadowGenerator.blurKernel = 32;
    // this.shadowGenerator.depthScale = 150;
    dirLight.intensity = 0.8;
    dirLight.shadowMinZ = 0;
    dirLight.shadowMaxZ = 500;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    const ground = BABYLON.Mesh.CreateGround('ground1', 70, 70, 150, this.scene);
    ground.receiveShadows = true;

    // Create and tweak the background material.
    const backgroundMaterial = new BABYLON.BackgroundMaterial('backgroundMaterial', this.scene);
    backgroundMaterial.diffuseTexture = new BABYLON.Texture(
      `${window.location.origin}/Textuers/scene/backgroundGround.png`,
      this.scene,
    );
    backgroundMaterial.diffuseTexture.hasAlpha = true;
    backgroundMaterial.opacityFresnel = false;
    backgroundMaterial.shadowLevel = 0.85;
    backgroundMaterial.alpha = 0.0;

    //Create CubicTexture
    const skyboxCubecTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
      './environment/environment.env',
      this.scene,
    );
    this.scene.environmentTexture = skyboxCubecTexture;

    //Mirror
    this.mirror = new BABYLON.MirrorTexture('mirror', 512, this.scene);
    this.mirror.mirrorPlane = new BABYLON.Plane(0, -1, 0, 0);
    this.mirror.adaptiveBlurKernel = 32;
    // this.Groundmirror.mirrorPlane = new BABYLON.Plane(0, -.69, -0, -1);
    backgroundMaterial.reflectionTexture = this.mirror;
    backgroundMaterial.reflectionFresnel = true;
    backgroundMaterial.reflectionStandardFresnelWeight = 0.9;
    backgroundMaterial.reflectionTexture.level = 0.8;
    ground.material = backgroundMaterial;

    this.scene.registerBeforeRender(() => {});
  }
  createShapes() {
    // Objects
    const plane = BABYLON.MeshBuilder.CreateBox('Plane', {}, this.scene);
    plane.rotationQuaternion = BABYLON.Quaternion.FromEulerAngles(0, Math.PI, 0);

    const icosphere = BABYLON.MeshBuilder.CreateIcoSphere('IcoSphere', {}, this.scene);
    icosphere.position.set(-2, 0, 0);

    const cylinder = BABYLON.MeshBuilder.CreateCylinder('Cylinder', {}, this.scene);
    cylinder.position.set(2, 0, 0);
  }
  changeSide(newSide) {
    //
    const SPEED_RATIO = 4;
    const LOOP_MODE = false;
    const FROM_FRAME = 0;
    const TO_FRAME = 100;
    //
    this.selectedSide = newSide;
    const sideConfigs = this.selectedModelConfig.sides.find(
      side => side.id === this.selectedSide,
    ).configs;
    const {alpha, beta, radius} = sideConfigs;
    this.mainCamera.animations = [
      this.createAnimation({
        property: 'beta',
        from: this.simplifyRadians(this.mainCamera.beta),
        to: beta,
      }),
      this.createAnimation({
        property: 'alpha',
        from: this.simplifyRadians(this.mainCamera.alpha),
        to: alpha,
      }),
      this.createAnimation({
        property: 'radius',
        from: this.mainCamera.radius,
        to: radius,
      }),
    ];
    this.scene.beginAnimation(this.mainCamera, FROM_FRAME, TO_FRAME, LOOP_MODE, SPEED_RATIO);
    // console.log('newSide', newSide);
  }
  applyTexture(textureData) {
    // console.log('selectedSide', this.selectedSide);

    const targetMeshName = getSideModelName(this.selectedModelConfig, this.selectedSide);
    // console.log('sdas', targetMeshName);

    if (!targetMeshName.length) {
      console.error("can't find this target mesh!!");
      return;
    }
    let targetMesh = null;
    this.currentModel.getChildMeshes(false).forEach(child => {
      if (child.name === targetMeshName) {
        targetMesh = child;
      }
    });

    if (targetMesh.material.albedoTexture) {
      targetMesh.material.albedoTexture.dispose();
    }

    const newTexture = new BABYLON.Texture(
      `data:${this.selectedSide}`,
      this.scene,
      true,
      true,
      BABYLON.Texture.BILINEAR_SAMPLINGMODE,
      null,
      null,
      textureData,
      true,
    );
    newTexture.vScale = -1; //fixTexture Render
    newTexture.hasAlpha = true;
    targetMesh.material.albedoTexture = newTexture;
    targetMesh.material.useAlphaFromAlbedoTexture = true;
  }
  //#endregion

  //region SceneActions
  changeColorByMeshId(meshId, newColorObj) {
    // console.log("newColorObj", newColorObj)
  }
  //#endregionq

  //#region UserInput (Mouse)
  onPointerDown(ev) {}
  onPointerUp(ev) {}
  onPointerMove(ev) {}
  mouseWheelHandler(ev) {}
  //#endregion

  //#region Animations
  createAnimation({property, from, to}) {
    const FRAMES_PER_SECOND = 60;
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

    const animation = BABYLON.Animation.CreateAnimation(
      property,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      FRAMES_PER_SECOND,
      ease,
    );
    animation.setKeys([
      {
        frame: 0,
        value: from,
      },
      {
        frame: 100,
        value: to,
      },
    ]);

    return animation;
  }
  assignScaleAnimation(targetObj) {
    targetObj.animations = [];
    const scaleAnimation = new BABYLON.Animation(
      'scaleAnimation',
      'scaling',
      300,
      BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
      BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE,
    );

    const keys = [];
    keys.push({
      frame: 0,
      value: targetObj.scaling.clone(),
    });

    keys.push({
      frame: 50,
      value: new BABYLON.Vector3(
        targetObj.scaling.x * 1.35,
        targetObj.scaling.y * 1.35,
        targetObj.scaling.z * 1.35,
      ),
    });

    keys.push({
      frame: 100,
      value: targetObj.scaling.clone(),
    });

    scaleAnimation.setKeys(keys);
    targetObj.animations.push(scaleAnimation);
    this.scene.beginAnimation(targetObj, 0, 100, false, 1, () => {});
  }
  simplifyRadians(radians) {
    const simplifiedRadians = radians % (2 * Math.PI);

    return simplifiedRadians < 0
      ? simplifiedRadians + BABYLON.Tools.ToRadians(360)
      : simplifiedRadians;
  }
  //#endregion
}
