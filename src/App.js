import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GameProper from "./pages/GameProper";
import ErrorPage from "./pages/ErrorPage";
import GeneralTrivia from "./components/general/GeneralTrivia";
import ScienceTrivia from "./components/science/ScienceTrivia";
import HistoryTrivia from "./components/history/HistoryTrivia";
import TechTrivia from "./components/technology/TechTrivia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<GameProper />} />
        <Route path="/general" element={<GeneralTrivia />} />
        <Route path="/science" element={<ScienceTrivia />} />
        <Route path="/history" element={<HistoryTrivia />} />
        <Route path="/technology" element={<TechTrivia />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
