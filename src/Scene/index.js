import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import partLookup from './partLookup';

function Shoe(props) {
  console.log('shoe');
  const group = useRef();
  const { nodes } = useGLTF('/af1-right.gltf');
  const aoMap = useLoader(THREE.TextureLoader, 'af1-right-ao.jpg');
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

  const clickShoe = (e) => {
    e.stopPropagation();
    const x = Math.floor(e.uv.x * 1000);
    const y = Math.floor(e.uv.y * 1000);
    const colorValues = textureCanvas.getContext('2d').getImageData(x, y, 1, 1)
      .data;
    console.log(partLookup(colorValues[0]));
  };

  return (
    <group ref={group} {...props} dispose={null} onClick={(e) => clickShoe(e)}>
      <mesh
        geometry={nodes.af1.geometry}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -1, 0]}
        scale={[0.35, 0.35, 0.35]}
      >
        <meshStandardMaterial aoMap={aoMap} color="#00ffff" />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      colorManagement={false}
      pixelRatio={2}
    >
      <ambientLight />
      <Suspense fallback={null}>
        <Shoe />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        minDistance={2}
        maxDistance={8}
      />
    </Canvas>
  );
}

export default Scene;
