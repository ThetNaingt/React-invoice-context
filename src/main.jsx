import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GeneralContextProvider from "./contexts/GeneralContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
