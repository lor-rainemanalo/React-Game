import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TriviaProvider } from "./contexts/generalContext";
import { ScienceProvider } from "./contexts/scienceContext";
import { HistoryProvider } from "./contexts/historyContext";
import { TechProvider } from "./contexts/techContext";

ReactDOM.render(
  <React.StrictMode>
    <TriviaProvider>
      <ScienceProvider>
        <HistoryProvider>
          <TechProvider>
            <App />
          </TechProvider>
        </HistoryProvider>
      </ScienceProvider>
    </TriviaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
