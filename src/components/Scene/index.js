import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { partLookup } from './partLookup';

function Shoe({ texture, right, setPart, setCurrentShoe, alone }) {
  const group = useRef();
  const { nodes } = useGLTF('/af1-right.gltf');
  const aoMap = useLoader(
    THREE.TextureLoader,
    `af1-${right ? 'right' : 'left'}-ao.jpg`
  );
  aoMap.flipY = false;

  const textureCanvas = document.createElement('canvas');
  textureCanvas.width = 1000;
  textureCanvas.height = 1000;
  const textureCanvasCTX = textureCanvas.getContext('2d');
  const img = new Image();
  img.src = `af1-red-right.png`;
  img.onload = () => {
    textureCanvasCTX.drawImage(img, 0, 0, 1000, 1000);
  };

  let x;
  let y;
  const pointerDown = (e) => {
    e.stopPropagation();
    x = e.clientX;
    y = e.clientY;
  };

  const pointerUp = (e) => {
    e.stopPropagation();
    if (
      e.clientX > x - 5 &&
      e.clientX < x + 5 &&
      e.clientY > y - 5 &&
      e.clientY < y + 5
    ) {
      clickShoe(e);
    }
  };

  const clickShoe = (e) => {
    if (e.delta < 10) {
      const x = Math.floor(e.uv.x * 1000);
      const y = Math.floor(e.uv.y * 1000);
      const colorValues = textureCanvas
        .getContext('2d')
        .getImageData(x, y, 1, 1).data;
      const part = partLookup(colorValues[0]);
      if (part || part === 0) {
        setPart(part);
        setCurrentShoe(right ? 'right' : 'left');
      }
    }
  };

  return (
    <group
      ref={group}
      dispose={null}
      onPointerDown={(e) => pointerDown(e)}
      onPointerUp={(e) => pointerUp(e)}
    >
      <mesh
        geometry={nodes.af1.geometry}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -1, alone ? 0 : right ? 1.3 : -1.3]}
        scale={[right ? 0.35 : -0.35, 0.35, 0.35]}
      >
        <meshStandardMaterial aoMap={aoMap} map={texture} />
      </mesh>
    </group>
  );
}

function Scene({
  textureLeft,
  textureRight,
  setPart,
  setCurrentShoe,
  visibility,
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      colorManagement={false}
      pixelRatio={3}
    >
      <ambientLight />
      <Suspense fallback={null}>
        {visibility.right && (
          <Shoe
            right
            texture={textureRight}
            setPart={setPart}
            setCurrentShoe={setCurrentShoe}
            alone={!visibility.left}
          />
        )}
        {visibility.left && (
          <Shoe
            texture={textureLeft}
            setPart={setPart}
            setCurrentShoe={setCurrentShoe}
            alone={!visibility.right}
          />
        )}
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        minDistance={4}
        maxDistance={12}
        enablePan={false}
      />
    </Canvas>
  );
}

export default Scene;
