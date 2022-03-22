import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sound from "react-sound";

import Home from "./pages/Home";
import GameProper from "./pages/GameProper";
import ErrorPage from "./pages/ErrorPage";
import GeneralTrivia from "./components/general/GeneralTrivia";
import ScienceTrivia from "./components/science/ScienceTrivia";
import HistoryTrivia from "./components/history/HistoryTrivia";
import TechTrivia from "./components/technology/TechTrivia";
import RussianRoulette from "./mp3/Russian Roulette Instrumentals.mp3";
import on from "./components/images/on.png";
import off from "./components/images/off.png";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Router>
      <Sound
        url={RussianRoulette}
        playStatus={isPlaying ? "PLAYING" : "PAUSED"}
        volume={10}
        loop={true}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spin" element={<GameProper />} />
        <Route path="/general" element={<GeneralTrivia />} />
        <Route path="/science" element={<ScienceTrivia />} />
        <Route path="/history" element={<HistoryTrivia />} />
        <Route path="/technology" element={<TechTrivia />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? (
          <img className="audio-img" src={off} alt="Muted" />
        ) : (
          <img className="audio-img" src={on} alt="Unmuted" />
        )}
      </div>
    </Router>
  );
}

export default App;
