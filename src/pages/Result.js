import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Result() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      {/* <img alt="Result" /> */}
      <h2>you got</h2>
      <h1>score here</h1>
      <button onClick={() => navigate("/spin")}>again</button>
    </div>
  );
}
