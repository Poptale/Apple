"use client";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Macbook from "./components/Macbook";
// import { Bloom, EffectComposer } from "@react-three/postprocessing";

const page = () => {
  return (
    <div class="h-screen w-full ">
      <div className="absolute -translate-1/2 top-[26%] left-[50%] text-white flex justify-center items-center flex-col">
        <h1 className="masked text-7xl font-[700] leading-tighter pb-5">
          Macbook Pro
        </h1>
        <p>Oh so pro!</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> Quos cumque
          ipsum quod asperiores?
        </p>
      </div>
      <Canvas camera={{ fov: 20, position: [0, -10, 120] }}>
        <ScrollControls pages={3}>
          <Macbook />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default page;
