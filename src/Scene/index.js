import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Shoe(props) {
  const group = useRef();
  const { nodes } = useGLTF('/af1-right.gltf');
  const aoMap = useLoader(THREE.TextureLoader, 'af1-right-ao.jpg');
  aoMap.flipY = false;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.af1.geometry}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -1, 0]}
        scale={[0.35, 0.35, 0.35]}
      >
        <meshStandardMaterial aoMap={aoMap} />
      </mesh>
    </group>
  );
}

// const COLOR = 0xeb4034;

// function BoxMesh({ position }) {
//   return (
//     <mesh position={position}>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshLambertMaterial color={COLOR} />
//     </mesh>
//   );
// }

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight />
      <Suspense fallback={null}>
        <Shoe />
        {/* <mesh scale={[1, 1, 1]}>
          <boxBufferGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <BoxMesh position={[1.2, 0, 0]} /> */}
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
