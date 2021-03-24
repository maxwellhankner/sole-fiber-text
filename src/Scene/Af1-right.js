import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/af1-right.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials['AF1_Rough_UV_OBJ_Ver2:Default_OBJ_004']}
        geometry={nodes.af1.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/af1-right.gltf');
