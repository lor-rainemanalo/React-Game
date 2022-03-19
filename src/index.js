import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Components from "./Components"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Components />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
