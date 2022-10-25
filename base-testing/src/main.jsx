import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirstApp } from "./components/FirstApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstApp title="Hola Mundo" />
  </React.StrictMode>
);
