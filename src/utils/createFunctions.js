import * as THREE from 'three';

export const createTexture = (textureCanvas) => {
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.flipY = false;
  return texture;
};

export const createCanvas = () => {
  return new Promise((resolve) => {
    const canvasSize = 1000;
    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const canvasCTX = canvas.getContext('2d');

    function waitForElement() {
      if (canvasCTX !== null && typeof canvas === 'object') {
        canvasCTX.fillStyle = '#00ffff';
        canvasCTX.fillRect(0, 0, canvasSize, canvasSize);
        resolve(canvas);
      } else {
        setTimeout(waitForElement, 100);
      }
    }
    waitForElement();
  });
};
