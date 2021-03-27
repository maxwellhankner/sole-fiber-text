export const runFunColors = (canvas, texture) => {
  const canvasCTX = canvas.getContext('2d');

  setInterval(() => drawRandomColor(), 1000);

  function drawRandomColor() {
    canvasCTX.fillStyle =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
    canvasCTX.fillRect(0, 0, 1000, 1000);
    texture.needsUpdate = true;
  }
};
