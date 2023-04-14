import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MaterialUIControllerProvider } from "./context/index";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
