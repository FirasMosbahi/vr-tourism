"use client";

// @ts-ignore
import { Pannellum, PannellumVideo } from "pannellum-react";

import React from "react";

function App() {
  return (
    <Pannellum
      width="100%"
      height="750px"
      image="/vr/zaitouna2.jpg"
      pitch={30}
      yaw={40}
      hfov={180}
      autoLoad
      onLoad={() => {
        console.log("panorama loaded");
      }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={-45}
        yaw={25}
        text="Welcome to the mosque"
        URL="/vr/2/1"
      />
    </Pannellum>
  );
}

export default App;
