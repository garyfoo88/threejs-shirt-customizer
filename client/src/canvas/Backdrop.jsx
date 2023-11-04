import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={10}
      alphaTest={0.85}
      temporal
      ref={shadows}
      frames={60}
    >
      <RandomizedLight
        position={[5, 5, -10]}
        amount={4}
        radius={9}
        intensity={0.5}
        ambient={0.25}
      />
      <RandomizedLight
        position={[-5, 5, -9]}
        amount={4}
        radius={9}
        intensity={0.5}
        ambient={0.25}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
