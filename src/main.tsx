import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Mesh, BoxGeometry, MeshStandardMaterial } from "three";
import { extend } from "@react-three/fiber";

extend({ Mesh, BoxGeometry, MeshStandardMaterial });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
