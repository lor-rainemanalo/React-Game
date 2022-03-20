import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HistoryContext } from "../../contexts/historyContext";

export default function Result() {
  const [triviaState, dispatch] = useContext(HistoryContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "RESTART" });
    navigate("/spin");
  };

  return (
    <div>
      {/* <img alt="Result" /> */}
      {triviaState.correctAnswerCount === triviaState.trivias.length ? (
        <h1>You won!</h1>
      ) : (
        <h1>Game over</h1>
      )}
      <h2>you got</h2>
      <h1>
        {triviaState.correctAnswerCount} out of {triviaState.trivias.length}
      </h1>
      <button onClick={handleClick}>again</button>
    </div>
  );
}
