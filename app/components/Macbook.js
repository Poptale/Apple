"use client";
import { Environment, useGLTF, useScroll, useTexture } from "@react-three/drei";
import React from "react";
import { degToRad } from "three/src/math/MathUtils";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Macbook = () => {
  let model = useGLTF("/mac.glb");
  let tex = useTexture("/red.jpg");

  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;

  let data = useScroll();
  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  return (
    <group position={[0, -10, 0]}>
      <primitive object={model.scene} />
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
        ]}
      />
    </group>
  );
};

export default Macbook;
