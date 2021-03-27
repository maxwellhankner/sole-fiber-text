import Scene from './Scene';
import './App.css';
import { useEffect, useState } from 'react';
import { createCanvas, createTexture } from './utils/createFunctions';
import { runFunColors } from './utils/runFunColors';

function App() {
  const [canvasLeft, setCanvasLeft] = useState(null);
  const [textureLeft, setTextureLeft] = useState(null);
  const [canvasRight, setCanvasRight] = useState(null);
  const [textureRight, setTextureRight] = useState(null);

  const setup = async () => {
    const canvasLeft = await createCanvas();
    const canvasRight = await createCanvas();
    setCanvasLeft(canvasLeft);
    setCanvasRight(canvasRight);
  };

  useEffect(() => {
    setup();
  }, []);

  useEffect(() => {
    if (canvasLeft && canvasRight) {
      setTextureLeft(createTexture(canvasLeft));
      setTextureRight(createTexture(canvasRight));
    }
  }, [canvasLeft, canvasRight]);

  useEffect(() => {
    if (canvasLeft && textureLeft && canvasRight && textureRight) {
      runFunColors(canvasLeft, textureLeft);
      runFunColors(canvasRight, textureRight);
    }
  }, [canvasLeft, textureLeft, canvasRight, textureRight]);

  const initialized = canvasLeft && textureLeft && canvasRight && textureRight;

  return (
    <div className="App">
      {initialized && (
        <Scene textureLeft={textureLeft} textureRight={textureRight} />
      )}
    </div>
  );
}

export default App;
