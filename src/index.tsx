import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRoutes } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRoutes />
  </React.StrictMode>
);
