import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Components from "./pages/Components";
import reportWebVitals from "./reportWebVitals";
import { TriviaProvider } from "./contexts/trivia";

ReactDOM.render(
  <React.StrictMode>
    <TriviaProvider>
      <App />
    </TriviaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
