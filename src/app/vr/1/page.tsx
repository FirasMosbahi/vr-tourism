"use client";

// @ts-ignore
import { Pannellum, PannellumVideo } from "pannellum-react";

import React from "react";

function App() {
  return (
    <Pannellum
      width="100%"
      height="750px"
      image="/vr/amphitheatre1.jpg"
      pitch={40}
      yaw={80}
      hfov={150}
      autoLoad
      onLoad={() => {
        console.log("panorama loaded");
      }}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={10}
        yaw={35}
        text="Welcome to the amphitheatre"
        URL="/vr/1/1"
      />
    </Pannellum>
  );
}

export default App;
