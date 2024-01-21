/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState, createRef, useMemo } from "react";
import debounce from "lodash.debounce";
import {
  DrawOptions,
  ElementTypes,
  TestType,
  Categories,
  ShapeTypes,
  BorderStyle,
  SubCategories,
  RenderMode,
} from "../definitions/types";
import * as api from "../api/editor";
import { v4 as uuidv4 } from "uuid";
import { useStyles } from "../views/EditorView/Editor/2D/styles";
import { useHistory, useParams } from "react-router-dom";
import { fabric } from "fabric";
import {
  ActiveSelection,
  Canvas,
  Text,
  Object,
  Transform,
} from "fabric/fabric-impl";
import { GameManager } from "../views/EditorView/Editor/3D";
import {
  TextOptions,
  HeadingOptions,
  ObjectConfig,
} from "../definitions/types/index";
import { SideTypes } from "../views/EditorView/Editor/utilities";
import "./marker-brush";
import { starPolygonPoints, pentagramPoints } from "./utils";
import {CheckCircle} from '@mui/icons-material';
import { renderToStaticMarkup } from 'react-dom/server';

import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import Iconn from './back.svg';


type SideData = {
  [sideId in SideTypes]: { version: string; objects: Object[] } | undefined;
};
type ImgSideData = {
  [sideId in SideTypes]: string;
};
const container = createRef<HTMLCanvasElement>();
export const MaxLineHeight = 3;
export const MinLineHeight = 1.2;

export const DefualtSelectedObjectsConfig: ObjectConfig = {
  isBold: false,
  isItalic: false,
  color: "#000000",
  borderColor: "#000000",
  borderWidth: 2,
  borderRadius: 0,
  dashedBorders: false,
  fontSize: 18,
  fontFamily: "arial",
  lineHeight: MinLineHeight,
  textAlign: "left",
  opacity: 1,
  text:"",
};

const X_API_KEY = process.env.REACT_APP_X_API_KEY;

const useEditorActions = () => {
  const [selectedRenderMode, setSelectedRenderMode] = useState<RenderMode>('2DMODE');
  const [isFirstUse, setIsFirstUse] = useState<boolean>(true);
  const [canvasColor, setCanvasColor] = useState<string>("#FFF");

  const [fabricCanvas, setFabricCanvas] = useState<Canvas>();
  const [gameManager, setGameManager] = useState<GameManager>();
  const [selectedSide, setSelectedSide] =
    useState<keyof typeof SideTypes>("FRONT");
  const [sidesData, setSideData] = useState<SideData>({
    BACK: undefined,
    FRONT: undefined,
    LEFT: undefined,
    RIGHT: undefined,
  });
  //tmp
  const [imgsSidesData, setimgsSideData] = useState<ImgSideData>({
    BACK: "",
    FRONT: "",
    LEFT: "",
    RIGHT: "",
  });

  const [selectedObjectsConfig, setSelectedObjectsConfig] =
    useState<ObjectConfig>(DefualtSelectedObjectsConfig);
  const [elementType, selectedElementType] = useState<
    ElementTypes | undefined
  >();
  const [selectedCategory, setSelectedCategory] = useState<
    Categories | undefined
  >();
  const [isFabricActonsReady, setIsFabricActonsReady] =
    useState<boolean>(false);

  const [selectedSubCategory, setSelectedSubCategory] = useState<
    SubCategories | undefined
  >();

  const classes = useStyles();

  const updateSelectedObjectsConfig = useCallback(
    (tmpFabricCanvas?: Canvas) => {
      const fabricInstance = tmpFabricCanvas || fabricCanvas;
      if (!fabricInstance) {
        return;
      }

      const aObject = fabricInstance.getActiveObject();
      const objects = [];
      if (!aObject) {
        return;
      }
      if (aObject?.type === "activeSelection") {
        objects.push(...(aObject as ActiveSelection).getObjects());
      } else {
        objects.push(aObject);
      }
      // console.log('objects', objects);
      const newConfigs: ObjectConfig = {
        isBold: objects.every((obj) => (obj as Text).fontWeight === "bold"),
        isItalic: objects.every((obj) => (obj as Text).fontStyle === "italic"),
        color:
          objects[0].fill?.toString() || DefualtSelectedObjectsConfig.color,
        borderColor:
          objects[0].stroke?.toString() ||
          DefualtSelectedObjectsConfig.borderColor,
        borderWidth:
          objects[0].strokeWidth || DefualtSelectedObjectsConfig.borderWidth,
        borderRadius:
          (objects[0] as fabric.Rect)?.rx ||
          DefualtSelectedObjectsConfig.borderRadius,
        dashedBorders:
          !!(objects[0] as fabric.Rect)?.strokeDashArray?.length ||
          DefualtSelectedObjectsConfig.dashedBorders,
        fontSize:
          (objects[0] as Text).fontSize ||
          DefualtSelectedObjectsConfig.fontSize,
        fontFamily:
          (objects[0] as Text).fontFamily ||
          DefualtSelectedObjectsConfig.fontFamily,
        lineHeight:
          (objects[0] as Text).lineHeight ||
          DefualtSelectedObjectsConfig.lineHeight,
        textAlign:
          (objects[0] as Text).textAlign ||
          DefualtSelectedObjectsConfig.textAlign,
        opacity:
          (objects[0] as Text).opacity ||
          DefualtSelectedObjectsConfig.opacity,
        text: 
          (objects[0] as Text).text ||
          DefualtSelectedObjectsConfig.text,
          
      };
      setSelectedObjectsConfig(newConfigs);
    },
    [fabricCanvas]
  );

  const addImageToCanvas = useCallback(
    (imageSrc: string, opts: { left: number; top: number }, canvas: Canvas) => {
      const { left, top } = opts;
      const imgElement = new Image();
      imgElement.src = imageSrc;

      imgElement.onload = () => {
        const fabricImage = new fabric.Image(imgElement, {
          scaleX: 0.25,
          scaleY: 0.25,
          left: left - 115,
          top: top - 80,
        });
        canvas.add(fabricImage);
        canvas.requestRenderAll();
      };
    },
    []
  );

  const getSelectedElement = useCallback(
    (tmpFabricCanvas?: Canvas) => {
      const fabricInstance = tmpFabricCanvas || fabricCanvas;
      if (!fabricInstance) {
        return null;
      }
      const aObject = fabricInstance.getActiveObject();
      const objects = [];
      if (!aObject) {
        return null;
      }
      return aObject;
    },
    [fabricCanvas]
  );

  const onSelectElement = useCallback(
    (tmpFabricCanvas?: Canvas) => {
      const aObject = getSelectedElement(tmpFabricCanvas);
      if (!aObject ||  (tmpFabricCanvas as any)['category'] === "PrintingTypes") {
        return;
      }

      if (aObject?.type !== "activeSelection") {
        selectedElementType(aObject?.type as ElementTypes);
        if (aObject?.type) {
          setTimeout(() => {
            switch (aObject?.type as ElementTypes) {
              case "i-text":
                setSelectedCategory("Texts");
                break;
              case "image":
                setSelectedCategory("Uploads");
                break;
              case "rect":
              case "circle":
              case "triangle":
              case "polygon":
                setSelectedCategory("Graphics");
                break;
              case "path":
                if((aObject as any)["customId"] ){
                  setSelectedCategory("Graphics");
                }else{
                  setSelectedCategory("Draw");
                }
                break;
              default:
                break;
            }
          }, 350);
        }
        return;
      }
    },
    [getSelectedElement]
  );

  useEffect(() => {
    if (fabricCanvas) {
      fabricCanvas.on("selection:cleared", (e) => {
        const { deselected } = e;
        if (deselected) {
          setSelectedObjectsConfig(DefualtSelectedObjectsConfig);
        }
        selectedElementType(undefined);
        if (selectedCategory === "Filters") {
          setSelectedCategory(undefined);
        }
      });
    }
  }, [fabricCanvas, isFabricActonsReady, selectedCategory]);

  const onInit2DEditor = useCallback(() => {
    // eslint-disable-next-line no-underscore-dangle
    const containerInstance = container.current;
    if (!containerInstance) {
      return;
    }

    setIsFabricActonsReady(false);
    console.log("careate 2d canvas");
    const { clientHeight, clientWidth } = containerInstance;
    const grid = 50;
    const lines = [];

    sidesData[selectedSide];

    const fabricCanvasInstance = new fabric.Canvas("canvas", {
      backgroundColor: "rgba(0, 0, 0, 0.0000001)",
      height: clientHeight,
      width: clientWidth,
      preserveObjectStacking: true,
    });

    if (sidesData[selectedSide]) {
      fabricCanvasInstance.loadFromJSON(sidesData[selectedSide], () => {
        fabricCanvasInstance.renderAll();
      });
    }

    function deleteObject(
      eventData: any,
      transform: any,
      x: number,
      y: number
    ) {
      const { target } = transform;
      const { canvas } = target;
      if (canvas) {
        if (target.type === "activeSelection") {
          (target as ActiveSelection).getObjects().forEach((child) => {
            canvas.remove(child);
          });
          canvas.discardActiveObject();
        } else {
          canvas.remove(target);
        }
        canvas.remove(target);
        canvas.requestRenderAll();
      }
      return false;
    }

    function cloneObject(eventData: any, transform: any, x: number, y: number) {
      const { target } = transform;
      const { canvas } = target;
      if (canvas) {
        target.clone((cloned: any) => {
          if (!canvas) {
            return;
          }

          if (target.type === "activeSelection") {
            (canvas && (canvas as Canvas))
              .getActiveObject()
              .clone((clonedGroup: any) => {
                clonedGroup.clone((clonedObj: any) => {
                  canvas.discardActiveObject();
                  clonedObj.set({
                    left: clonedObj.left + 10,
                    top: clonedObj.top + 10,
                    evented: true,
                  });
                  clonedObj.canvas = canvas;
                  clonedObj.forEachObject((obj: any) => {
                    canvas.add(obj);
                  });
                  clonedObj.setCoords();
                  clonedGroup.top += 10;
                  clonedGroup.left += 10;
                  canvas.setActiveObject(clonedObj);
                });
              });
          } else {
            cloned.left += 10;
            cloned.top += 10;
            canvas.add(cloned);
            canvas.setActiveObject(cloned);
          }
          canvas.requestRenderAll();
        });
      }
      return false;
    }
    function aboveObject (eventData:any, transform:any) {
      const { target } = transform;
      fabricCanvasInstance.bringForward(target);
      // bringToFront(myObject)
      return false
    }
    function behindObject (eventData:any, transform:any) {
      const { target } = transform;
      fabricCanvasInstance.sendBackwards(target);
      // sendToBack(myObject)
      return false
    }
    //
    const deleteImg = document.createElement("img");
    deleteImg.src = `${window.location.origin}/assets/icons/actions/removeIcon.png`;

    const cloneImg = document.createElement("img");
    cloneImg.src = `${window.location.origin}/assets/icons/actions/cloneIcon.png`;

    const arrowUpImg = document.createElement("img");
    arrowUpImg.src = `${window.location.origin}/assets/icons/actions/arrowUp.png`;
    
    const arrowDownImg = document.createElement("img");
    arrowDownImg.src = `${window.location.origin}/assets/icons/actions/arrowDown.png`;

    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 72,
      cursorStyle: "pointer",
      mouseUpHandler: deleteObject,
      render: function(ctx, left, top, styleOverride, fabricObject) {
        // Render white background
        ctx.fillStyle = "#ffffff";
       
        ctx.fillRect(left - 12, top - 12, 24, 24);
        
        // Render icon
        renderIcon(deleteImg)(ctx, left, top, styleOverride, fabricObject);
      },
      sizeX: 20,
      sizeY: 20,
    });

    fabric.Object.prototype.controls.cloneControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 52,
      cursorStyle: "pointer",
      mouseUpHandler: cloneObject,
      render: function(ctx, left, top, styleOverride, fabricObject) {
        // Render white background
        ctx.fillStyle = "#ffffff";
       
        ctx.fillRect(left - 12, top - 12, 24, 24);
        
        // Render icon
        renderIcon(cloneImg)(ctx, left, top, styleOverride, fabricObject);
      },
      sizeX: 20,
      sizeY: 20,
    });

    fabric.Object.prototype.controls.downArrowControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 28,
      cursorStyle: "pointer",
      mouseUpHandler: behindObject,
      render: function(ctx, left, top, styleOverride, fabricObject) {
        // Render white background
        ctx.fillStyle = "#ffffff";
       
        ctx.fillRect(left - 12, top - 12, 24, 24);
        
        // Render icon
        renderIcon(arrowDownImg)(ctx, left, top, styleOverride, fabricObject);
      },
      sizeX: 10,
      sizeY: 20,
    });
    
    fabric.Object.prototype.controls.upArrowControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 10,
      cursorStyle: "pointer",
      mouseUpHandler: aboveObject,
      render: function(ctx, left, top, styleOverride, fabricObject) {
        // Render white background
        ctx.fillStyle = "#ffffff";
       
        ctx.fillRect(left - 12, top - 12, 24, 24);
        
        // Render icon
        renderIcon(arrowUpImg)(ctx, left, top, styleOverride, fabricObject);
      },
      sizeX: 10,
      sizeY: 20,
    });
    //
    fabricCanvasInstance.on("selection:created", (e) => {
      updateSelectedObjectsConfig(fabricCanvasInstance);
      onSelectElement(fabricCanvasInstance);
    });
    fabricCanvasInstance.on("selection:updated", (e) => {
      updateSelectedObjectsConfig(fabricCanvasInstance);
      onSelectElement(fabricCanvasInstance);
    });
    fabricCanvasInstance.on("mouse:up", (e) => {
      if(fabricCanvasInstance.isDrawingMode && (fabricCanvasInstance as any)['category'] === "Draw"){
        fabricCanvasInstance.isDrawingMode = false;
      }
    });
    
    // fabricCanvasInstance.on('selection:cleared', e => {
    //   console.log('cleared =====', e);
    //   const {deselected} = e;
    //   if (deselected) {
    //     setSelectedObjectsConfig(DefualtSelectedObjectsConfig);
    //   }
    //   selectedElementType(undefined);
    //   setSelectedCategory(undefined);
    // });
    fabricCanvasInstance.on("object:selected", (e) => {
      // console.log("selected =====", e);
      // const {deselected} = e;
      // if (deselected) {
      //   setSelectedObjectsConfig(DefualtSelectedObjectsConfig);
      // }
    });

    //events
    function handleDragEnter(e: DragEvent) {
      e.preventDefault();
      e.target && (e.target as HTMLElement).classList.add(classes.dragging);
    }
    //
    function handleDragOver(e: any) {
      if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }
      return false;
    }
    //
    const handleDrop = (e: any) => {
      e.preventDefault();
      const imageSrc = e.dataTransfer && e.dataTransfer.getData("text");
      addImageToCanvas(
        imageSrc || "",
        { left: e?.layerX, top: e.layerY },
        fabricCanvasInstance
      );
      e.target && (e.target as HTMLElement).classList.remove(classes.dragging);
    };
    //
    function handleDragLeave(e: DragEvent) {
      e.preventDefault();
      e.target && (e.target as HTMLElement).classList.remove(classes.dragging);
    }

    const canvasContainer = document.getElementById("canvas-container");
    if (canvasContainer) {
      canvasContainer.addEventListener("dragenter", handleDragEnter);
      canvasContainer.addEventListener("dragover", handleDragOver, false);
      canvasContainer.addEventListener("drop", handleDrop, false);
      canvasContainer.addEventListener("dragleave", handleDragLeave);
    }

    setFabricCanvas(fabricCanvasInstance);
  }, [addImageToCanvas, selectedSide, sidesData, updateSelectedObjectsConfig]);

  const discardActiveObjects = useCallback(()=>{
    if (!fabricCanvas) {
      return;
    }
    fabricCanvas.discardActiveObject();
    fabricCanvas.renderAll();
  },[fabricCanvas]);

  function renderIcon(icon: any) {
    // eslint-disable-next-line func-names
    return function (
      ctx: any,
      left: number,
      top: number,
      styleOverride: any,
      fabricObject: any
    ) {
      const size = 24;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(icon, -size / 2, -size / 2, size, size);
      ctx.restore();
    };
  }

  const onAddText = useCallback(
    (text: string, options: TextOptions) => {
      const { heading } = options;
      let fontSize = 18;
      switch (heading) {
        default:
        case "h1":
          fontSize = 30;
          break;
        case "h2":
          fontSize = 24;
          break;
        case "h3":
          fontSize = 21;
          break;
        case "h4":
          fontSize = 18;
          break;
        case "h5":
          fontSize = 16;
          break;
        case "h6":
          fontSize = 14;
          break;
      }

      (fabricCanvas as Canvas).add(
        new fabric.IText(text, {
          fontFamily: options.fontFamilyId || DefualtSelectedObjectsConfig.fontFamily,
          fill: "#000",
          fontSize: fontSize,
          fontWeight: "normal",
          padding: 5,
          left: 0,
          top: 0,
          opacity:1,
          lineHeight:MinLineHeight,
        })
      );
    },
    [fabricCanvas]
  );

  const getSelectedObjects = useCallback(() => {
    if (!fabricCanvas) {
      return [];
    }
    const aObject = (fabricCanvas as Canvas).getActiveObject();
    if (!aObject) {
      return [];
    }
    if (aObject.type === "activeSelection") {
      return (aObject as ActiveSelection).getObjects();
    } else {
      return [aObject];
    }
  }, [fabricCanvas]);

  const onBold = useCallback(() => {
    if (!fabricCanvas) {
      return;
    }
    const aObject = (fabricCanvas as Canvas).getActiveObject();
    if (!aObject) {
      return;
    }
    if (aObject.type === "activeSelection") {
      const objects: Object[] = (aObject as ActiveSelection).getObjects();
      const isBold = objects.some((obj) => (obj as Text).fontWeight === "bold");
      objects.forEach((obj) => {
        (obj as Text).set("fontWeight", isBold ? "normal" : "bold");
      });
    } else {
      (aObject as Text).set(
        "fontWeight",
        (aObject as Text).fontWeight === "normal" ? "bold" : "normal"
      );
    }
    updateSelectedObjectsConfig();
    (fabricCanvas as Canvas).requestRenderAll();
  }, [fabricCanvas, updateSelectedObjectsConfig]);

  const onItalic = useCallback(() => {
    if (!fabricCanvas) {
      return;
    }
    const aObject = (fabricCanvas as Canvas).getActiveObject();
    if (!aObject) {
      return;
    }
    if (aObject.type === "activeSelection") {
      const objects: Object[] = (aObject as ActiveSelection).getObjects();
      const isItalic = !objects.some(
        (obj) => (obj as Text).fontStyle === "italic"
      );
      objects.forEach((obj) => {
        (obj as Text).set("fontStyle", isItalic ? "normal" : "italic");
      });
    } else {
      (aObject as Text).set(
        "fontStyle",
        (aObject as Text).fontStyle === "normal" ? "italic" : "normal"
      );
    }
    updateSelectedObjectsConfig();
    (fabricCanvas as Canvas).requestRenderAll();
  }, [fabricCanvas, updateSelectedObjectsConfig]);

  const onChangeFontSize = useCallback(
    (increase: boolean) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      const { fontSize } = DefualtSelectedObjectsConfig;
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as Text).set(
            "fontSize",
            increase
              ? (obj as Text).fontSize || fontSize + 1
              : (obj as Text).fontSize || fontSize - 1
          );
        });
      } else {
        (aObject as Text).set(
          "fontSize",
          increase
            ? ((aObject as Text).fontSize || fontSize) + 1
            : ((aObject as Text).fontSize || fontSize) - 1
        );
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeFontFamily = useCallback(
    (newFontFamily: string) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as Text).set("fontFamily", newFontFamily);
        });
      } else {
        (aObject as Text).set("fontFamily", newFontFamily);
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeLineHeight = useCallback(
    (value:number) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        // const isLineHeight = objects.some((obj) => (obj as Text).lineHeight === MaxLineHeight);
        objects.forEach((obj) => {
          // (obj as Text).set("lineHeight", isLineHeight ? MinLineHeight : MaxLineHeight);
          (obj as Text).set("lineHeight", value);
        });
      } else {
        (aObject as Text).set("lineHeight", value);
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeColor = useCallback(
    (newHexColor: string) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as Text).set("fill", newHexColor);
        });
      } else {
        (aObject as Text).set("fill", newHexColor);
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeFontAligment = useCallback(
    (aligmentId: string) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as Text).set("textAlign", aligmentId);
        });
      } else {
        (aObject as Text).set("textAlign", aligmentId);
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeOpacity = useCallback(
    (opacity: number) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as Text).set("opacity", opacity);
        });
      } else {
        (aObject as Text).set("opacity", opacity);
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeBorderColor = useCallback(
    (newHexColor: string) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as Text).set("stroke", newHexColor);
        });
      } else {
        (aObject as Text).set("stroke", newHexColor);
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeBorderStyle = useCallback(
    (borderStyle: BorderStyle) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as fabric.Rect).set(
            "strokeDashArray",
            borderStyle === "Dash" ? [9, 2] : []
          );
        });
      } else {
        (aObject as fabric.Rect).set(
          "strokeDashArray",
          borderStyle === "Dash" ? [9, 2] : []
        );
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeBorderWight = useCallback(
    (borderWidth: number) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as fabric.Rect).set("strokeWidth", borderWidth);
        });
      } else {
        (aObject as fabric.Rect).set("strokeWidth", borderWidth);
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onChangeBorderRadius = useCallback(
    (borderRadius: number) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = (fabricCanvas as Canvas).getActiveObject();
      if (!aObject) {
        return;
      }
      if (aObject.type === "activeSelection") {
        const objects: Object[] = (aObject as ActiveSelection).getObjects();
        objects.forEach((obj) => {
          (obj as fabric.Rect).set("rx", borderRadius);
          (obj as fabric.Rect).set("ry", borderRadius);
        });
      } else {
        (aObject as fabric.Rect).set("rx", borderRadius);
        (aObject as fabric.Rect).set("ry", borderRadius);
      }
      updateSelectedObjectsConfig();
      (fabricCanvas as Canvas).requestRenderAll();
    },
    [fabricCanvas, updateSelectedObjectsConfig]
  );

  const onUploadImage = useCallback(
    (imageBase: string) => {
      if (!fabricCanvas) {
        return;
      }
      const fff = fabric.Image.fromURL(
        imageBase,
        (img) => {
        (fabricCanvas as Canvas).add(img);
        (fabricCanvas as Canvas).renderAll();
        },
        { scaleX: 0.15, scaleY: 0.15 }
      );

      // fetch(imageBase)
      // .then(res => res.blob())
      // .then(blob => {
      //   const formData = new FormData();
      //   const file = new File([blob], "filename.jpeg");
      //   formData.append('image', file)

      //   console.log("formData", formData)
      // });


      
      // let filter = new fabric.Image.filters.RemoveWhite({
      //   threshold: 40,
      //   distance: 140
      // });
      // (fff.filters || []).push(filter);
      // fff.applyFilters();
      // fabricCanvas.renderAll()
    },
    [fabricCanvas]
  );
  
  // const onRemoveBack

  const onApplyImage = useCallback(() => {
    // console.log('selectedSide', selectedSide);
    //save SIDE DATA to side Id
    const sideData = (fabricCanvas as Canvas).toJSON();
    setSideData((prevSideData: SideData) => {
      return { ...prevSideData, [selectedSide]: sideData };
    });


    
    //apply data to 3d
    const imgData = (fabricCanvas as Canvas).toDataURL({
      quality: 1,
      format: "png",
      multiplier:2,
      // withoutTransform: true,
      // withoutShadow: true,
    });

    //tmp
    setimgsSideData((prevSideData: ImgSideData) => {
      return { ...prevSideData, [selectedSide]: imgData };
    });
    //
    gameManager?.studioSceneManager.applyTexture(imgData);
  }, [fabricCanvas, gameManager, selectedSide]);

  const onSubmitData = useCallback(() => {

    const svg = (fabricCanvas as Canvas).toSVG();
    // console.log("Svg --->  ", svg)

    // console.log("sidesData", sidesData);
    // console.log("sidesData images", imgsSidesData);
  }, [fabricCanvas, imgsSidesData, sidesData]);

  const onDraw = useCallback(
    (drawOptions?: DrawOptions) => {
      if (!fabricCanvas) {
        return;
      }
      fabricCanvas.isDrawingMode = true;

      switch (drawOptions?.type) {
        case "Pencil":
          case "Circle":
          default:
          // Customize the marker brush
          fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
          fabricCanvas.freeDrawingBrush.color = drawOptions?.color || "red"; // Set brush color
          fabricCanvas.freeDrawingBrush.width = drawOptions?.width || 2;
          fabricCanvas.freeDrawingBrush.decimate = 5; // Adjusts points density for smoother curves
          break;
        case "Marker":
          // @ts-ignore
          fabricCanvas.freeDrawingBrush = new fabric.MarkerBrush(fabricCanvas, {
            width: drawOptions.width,
            opacity: 1,
            color: drawOptions.color,
          });
          break;
      }
    },
    [fabricCanvas]
  );

  const isDrawingMode = useCallback(()=>{
    if (!fabricCanvas) {
      return false;
    }
   return fabricCanvas.isDrawingMode || false;
  },[fabricCanvas]);

  const cancelDrawing = useCallback(() => {
    if (!fabricCanvas) {
      return;
    }
    fabricCanvas.isDrawingMode = false;
  }, [fabricCanvas]);

  const getImagesFilters = useCallback(() => {
    let results: {
      id: fabric.IGrayscaleFilter;
      src: string;
      selected: boolean;
    }[] = [];

    if (!fabricCanvas) {
      return results;
    }
    const aObject = getSelectedElement();
    if (!aObject) {
      return results;
    }

    if (aObject instanceof fabric.Image) {
      // const clonedImage = fabric.Image.fromElement(aObject.toObject());
      const filtersMethods = [
        new fabric.Image.filters.Grayscale(),
        new fabric.Image.filters.Blur(),
        new fabric.Image.filters.Sepia(),
        new fabric.Image.filters.Invert(),
        new fabric.Image.filters.Blur({ blur: 0.25 }),
        new fabric.Image.filters.Brightness({ brightness: 0.2 }),
        new fabric.Image.filters.Contrast({ contrast: 0.5 }),
        new fabric.Image.filters.Saturation({ saturation: -0.5 }),
        new fabric.Image.filters.HueRotation({ rotation: 45 }),
        new fabric.Image.filters.Noise({ noise: 100 }),
        new fabric.Image.filters.Pixelate({ blocksize: 5 }),
      ];

      const selectedFilter = aObject.filters && aObject.filters[0];
      aObject.filters = [];
      aObject.applyFilters();
      aObject.cloneAsImage((clone: fabric.Image) => {
        results = filtersMethods.map((filter) => {
          (clone.filters || []).push(filter);
          const base64URL = clone.applyFilters().toDataURL({ format: "png" });
          clone.filters = [];
          clone.applyFilters();
          return {
            id: filter,
            src: base64URL,
            selected:
              (filter as any)?.type ===
                (selectedFilter && (selectedFilter as any))?.type || false,
          };
        });
        // fabricCanvas.add(clone);
        clone.dispose();
        return results;
      });
      if (selectedFilter) {
        aObject.filters = [selectedFilter];
        aObject.applyFilters();
      }
      return results;
    }

    return results;
  }, [fabricCanvas, getSelectedElement]);

  const applyImageFilter = useCallback(
    (selectedId: fabric.IGrayscaleFilter) => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = getSelectedElement();
      if (!aObject) {
        return;
      }

      if (aObject instanceof fabric.Image) {
        aObject.filters = [];
        (aObject.filters || []).push(selectedId);
        aObject.applyFilters();
        fabricCanvas.renderAll();
      }
    },
    [fabricCanvas, getSelectedElement]
  );

  const removeImageBackground = useCallback(
    // eslint-disable-next-line require-await
    async () => {
      if (!fabricCanvas) {
        return;
      }
      const aObject = getSelectedElement();
      if (!aObject) {
        return;
      }
     if (aObject instanceof fabric.Image) {
          const base64 = aObject.getSrc();
          fetch(base64)
          .then(res => res.blob())
          .then(async blob => {
            const formData = new FormData();
            formData.append('image_file', blob)

            const response = await fetch("https://sdk.photoroom.com/v1/segment", {
              method: "POST",
              headers: {
                "x-api-key": X_API_KEY || ""
              },
              body: formData
            });

            if(response.status !== 200){
              return;
            }
            const outputBlob = await response.blob();
            let reader = new FileReader();
            reader.readAsDataURL(outputBlob);
            reader.onloadend =  () => {
              let base64data = reader.result;
              if(base64data){
                aObject.setSrc(base64data as string,()=>{
                  fabricCanvas.renderAll(); // Render the canvas to reflect the deselection
                });
              }
            };
          });
      }
    },
    [fabricCanvas, getSelectedElement]
  );

  const drawShapeById = useCallback(
    (shapeId: ShapeTypes) => {
      if (!fabricCanvas) {
        return;
      }
      let newShape;
      switch (shapeId) {
        default:
        case "rectangle":
          // Draw a rectangle
          newShape = new fabric.Rect({
            left: 10,
            top: 10,
            width: 150,
            height: 150,
            fill: "#caccd1",
            stroke: "#8683db",
            strokeWidth: 2,
            rx: 0,
            ry: 0,
          });
          break;
        case "circle":
          // Draw a circle
          newShape = new fabric.Circle({
            left: 15,
            top: 15,
            radius: 80,
            fill: "#caccd1",
            stroke: "#8683db",
            strokeWidth: 2,
          });
          break;
        case "triangle":
          // Draw a triangle
          newShape = new fabric.Triangle({
            left: 15,
            top: 15,
            width: 150,
            height: 150,
            fill: "#caccd1",
            stroke: "#8683db",
            strokeWidth: 2,
          });
          break;
        case "star5":
          newShape = new fabric.Polygon(starPolygonPoints(5, 50, 20, 60), {
            left: 15,
            top: 15,
            width: 150,
            height: 150,
            fill: "#caccd1",
            stroke: "#8683db",
            strokeWidth: 2,
          });
          break;
        case "star4":
          newShape = new fabric.Polygon(starPolygonPoints(4, 50, 20, 0), {
            left: 15,
            top: 15,
            width: 150,
            height: 150,
            fill: "#caccd1",
            stroke: "#8683db",
            strokeWidth: 2,
          });
          break;
        case "star8":
          newShape = new fabric.Polygon(starPolygonPoints(8, 50, 20, 0), {
            left: 15,
            top: 15,
            width: 150,
            height: 150,
            fill: "#caccd1",
            stroke: "#8683db",
            strokeWidth: 2,
          });
          break;
        case "pentagram":
          newShape = new fabric.Polygon(pentagramPoints(5), {
            left: 15,
            top: 15,
            width: 150,
            height: 150,
            fill: "#caccd1",
            stroke: "#8683db",
            strokeWidth: 2,
          });
          break;
        case "hex":
          newShape = new fabric.Polygon(pentagramPoints(6), {
            left: 15,
            top: 15,
            width: 150,
            height: 150,
            fill: "#caccd1",
            stroke: "#8683db",
            strokeWidth: 2,
          });
          break;
      }
      fabricCanvas.add(newShape);
    },
    [fabricCanvas]
  );

  const onSelectFistSide = useCallback((side:keyof typeof SideTypes)=>{
    setSelectedSide(side);
    if(gameManager){
      gameManager.studioSceneManager.changeSide(side)
    }
    setSelectedRenderMode("2DMODE");
    setSelectedCategory(undefined);
    setIsFirstUse(false);
  },[gameManager])

  const onChangeCanvasColor = useCallback(
    (color: string) => {
      // if (!fabricCanvas) {
      //   return;
      // }
      setCanvasColor(color)
      // fabricCanvas.backgroundColor=color;

    },
    []
  );
  
  const onSelectSvgIcon = useCallback((svgString: string)=>{
    if (!fabricCanvas) {
      return;
    }
  
    const fff = fabric.Image.fromURL(
      svgString,
      (img) => {
        // (img as any)['customId'] ='vvvvvvvvvvv';
        (fabricCanvas as Canvas).add(img);
        (fabricCanvas as Canvas).renderAll();
      },
      { scaleX: 2, scaleY: 2}
    );

    //SVG
    // fabric.loadSVGFromString(svgString,(imgs:fabric.Object[])=>{
    //     console.log("e",imgs)
    //     if(imgs && imgs.length && imgs[0]){
    //       const [img] = imgs;
    //         img.set({
    //           left: 10,
    //           top: 10,
    //           scaleX: 2,
    //           scaleY: 2,
    //           fill:"black",
    //         });
    //         (img as any)['customId'] ='vvvvvvvvvvv'
    //       fabricCanvas.add(img);
    //     }
    // });
    
  },[fabricCanvas]);

  return {
    container,
    fabricCanvas,
    gameManager,
    selectedObjectsConfig,
    selectedSide,
    elementType,
    selectedCategory,
    selectedSubCategory,
    isFirstUse,
    selectedRenderMode,
    canvasColor,
    onSelectSvgIcon,
    onChangeCanvasColor,
    setSelectedRenderMode,
    onSelectFistSide,
    isDrawingMode,
    setGameManager,
    onInit2DEditor,
    discardActiveObjects,
    selectedElementType,
    getSelectedObjects,
    setSelectedCategory,
    setSelectedSubCategory,
    setSelectedSide,
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
    onChangeBorderStyle,
    onDraw,
    cancelDrawing,
    getImagesFilters,
    applyImageFilter,
    drawShapeById,
    onChangeBorderWight,
    onChangeBorderRadius,
    onChangeOpacity,
    onUploadImage,
    onApplyImage,
    onSubmitData,
  };
};

export default useEditorActions;
