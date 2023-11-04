import React from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
  });

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        material-roughness={1}
        dispose={null}
        material={materials.lambert1}
        geometry={nodes.T_Shirt_male.geometry}
      >
        {snap.isFullTexture && (
          <Decal
            map={fullTexture}
            scale={1}
            rotation={[0, 0, 0]}
            position={[0, 0, 0]}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            anisotropy={16}
            map={logoTexture}
            scale={0.15}
            rotation={[0, 0, 0]}
            position={[0, 0.04, 0.15]}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
