import { useEffect, useState } from 'react';
import Scene from '../../components/Scene';
import Interface from '../../components/Interface';
import './style.css';
import { createCanvas, createTexture } from '../../utils/createFunctions';

function Designer() {
  const [part, setPart] = useState(0);
  const [currentShoe, setCurrentShoe] = useState('right');
  const [visibility, setVisibility] = useState({ right: true, left: true });

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

  const initialized = canvasLeft && textureLeft && canvasRight && textureRight;

  if (initialized) {
    return (
      <div className="designer">
        <Scene
          textureLeft={textureLeft}
          textureRight={textureRight}
          setPart={setPart}
          setCurrentShoe={setCurrentShoe}
          visibility={visibility}
        />
        <Interface
          part={part}
          currentShoe={currentShoe}
          setCurrentShoe={setCurrentShoe}
          visibility={visibility}
          setVisibility={setVisibility}
        />
      </div>
    );
  } else {
    return <div>null</div>;
  }
}
export default Designer;
