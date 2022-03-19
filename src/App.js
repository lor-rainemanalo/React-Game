import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GameProper from "./pages/GameProper";
import TriviaProper from "./pages/TriviaProper";
import Result from "./pages/Result";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<GameProper />} />
        <Route path="/trivia" element={<TriviaProper />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
