import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Shoe(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/af1-right.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials['AF1_Rough_UV_OBJ_Ver2:Default_OBJ_004']}
        geometry={nodes.af1.geometry}
        material-color={'#66aa44'}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -2, 0]}
      />
    </group>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      {/* <ambientLight /> */}
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Shoe />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
      />
    </Canvas>
  );
}

export default Scene;
