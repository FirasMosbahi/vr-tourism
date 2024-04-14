"use client";

// @ts-ignore
import { Pannellum, PannellumVideo } from "pannellum-react";

import React from "react";

function App() {
  return (
    <Pannellum
      width="100%"
      height="750px"
      image="/vr/zaitouna3.jpg"
      pitch={40}
      yaw={10}
      hfov={480}
      autoLoad
      onLoad={() => {
        console.log("panorama loaded");
      }}
    ></Pannellum>
  );
}

export default App;
