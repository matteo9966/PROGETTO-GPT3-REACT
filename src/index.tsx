import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import './animations.css';
import './global.css';
import "./index.css";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  root
);
