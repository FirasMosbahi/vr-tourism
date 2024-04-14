"use client";

// @ts-ignore
import { Pannellum, PannellumVideo } from "pannellum-react";

import React from "react";

function App() {
  return (
    <Pannellum
      width="100%"
      height="750px"
      image="/vr/musée1.jpg"
      pitch={10}
      yaw={10}
      hfov={140}
      autoLoad
      onLoad={() => {
        console.log("panorama loaded");
      }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={-65}
        yaw={20}
        text="Welcome to the musem"
        URL="/vr/3/1"
      />
    </Pannellum>
  );
}

export default App;
