/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable id-length */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/**
 * MarkerBrush class
 * @class fabric.MarkerBrush
 * @extends fabric.BaseBrush
 */
import {fabric} from 'fabric';

(function (fabricCanvas) {
  fabric.util.trimCanvas = function (canvas) {
    var ctx = canvas.getContext('2d');
    var w = canvas.width,
      h = canvas.height;

    var pix = {x: [], y: []},
      n,
      imageData = ctx.getImageData(0, 0, w, h),
      fn = function (a, b) {
        return a - b;
      };

    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        if (imageData.data[(y * w + x) * 4 + 3] > 0) {
          pix.x.push(x);
          pix.y.push(y);
        }
      }
    }
    pix.x.sort(fn);
    pix.y.sort(fn);
    n = pix.x.length - 1;

    //if (n == -1) {
    //	// Nothing to trim... empty canvas?
    //}

    w = pix.x[n] - pix.x[0];
    h = pix.y[n] - pix.y[0];
    var cut = ctx.getImageData(pix.x[0] || 0, pix.y[0] || 0, canvas.width, canvas.height);

    canvas.width = w;
    canvas.height = h;
    ctx.putImageData(cut, 0, 0);

    return {x: pix.x[0], y: pix.y[0]};
  };
  fabric.BaseBrush.prototype.convertToImg = function () {
    var pixelRatio = this.canvas.getRetinaScaling(),
      c = fabric.util.copyCanvasElement(this.canvas.upperCanvasEl),
      xy = fabric.util.trimCanvas(c),
      img = new fabric.Image(c);

    img
      .set({
        left: xy.x / pixelRatio,
        top: xy.y / pixelRatio,
        scaleX: 1 / pixelRatio,
        scaleY: 1 / pixelRatio,
      })
      .setCoords();
    this.canvas.add(img).clearContext(this.canvas.contextTop);
    this.canvas.clearContext(this.canvas.contextTop);
  };

  fabricCanvas.MarkerBrush = fabric.util.createClass(fabricCanvas.BaseBrush, {
    color: '#000000',
    opacity: 1,
    width: 30,

    _baseWidth: 10,
    _lastPoint: null,
    _lineWidth: 3,
    _point: null,
    _size: 0,

    initialize: function (canvas, opt) {
      opt = opt || {};

      this.canvas = canvas;
      this.width = opt.width || canvas.freeDrawingBrush.width;
      this.color = opt.color || canvas.freeDrawingBrush.color;
      this.opacity = opt.opacity || canvas.contextTop.globalAlpha;
      this.canvas.contextTop.globalAlpha = this.opacity;
      this._point = new fabric.Point();

      this.canvas.contextTop.lineJoin = 'round';
      this.canvas.contextTop.lineCap = 'round';
    },

    changeColor: function (color) {
      this.color = color;
    },

    changeOpacity: function (value) {
      this.opacity = value;
    },

    _render: function (pointer) {
      let ctx;
      let lineWidthDiff;
      let i;

      ctx = this.canvas.contextTop;

      ctx.beginPath();

      for (let i = 0, len = this._size / this._lineWidth / 2; i < len; i++) {
        lineWidthDiff = (this._lineWidth - 1) * i;

        ctx.globalAlpha = 0.8 * this.opacity;
        ctx.moveTo(this._lastPoint.x + lineWidthDiff, this._lastPoint.y + lineWidthDiff);
        ctx.lineTo(pointer.x + lineWidthDiff, pointer.y + lineWidthDiff);
        ctx.stroke();
      }

      this._lastPoint = new fabric.Point(pointer.x, pointer.y);
    },

    onMouseDown: function (pointer) {
      this._lastPoint = pointer;
      this.canvas.contextTop.strokeStyle = this.color;
      this.canvas.contextTop.lineWidth = this._lineWidth;
      this._size = this.width + this._baseWidth;
    },

    onMouseMove: function (pointer) {
      if (this.canvas._isCurrentlyDrawing) {
        this._render(pointer);
      }
    },

    onMouseUp: function () {
      this.canvas.contextTop.globalAlpha = this.opacity;
      this.canvas.contextTop.globalAlpha = 1;
      this.convertToImg();
      //   this.canvas.contextTop.globalAlpha = this.opacity;
    },
  });
})(fabric);
