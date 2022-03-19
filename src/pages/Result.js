import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TriviaContext } from "../contexts/trivia";

export default function Result() {
  const [triviaState, dispatch] = useContext(TriviaContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "RESTART" });
    navigate("/spin");
  };

  return (
    <div>
      {/* <img alt="Result" /> */}
      <h2>you got</h2>
      <h1>
        {triviaState.correctAnswerCount} out of {triviaState.trivias.length}
      </h1>
      <button onClick={handleClick}>again</button>
      {/* reset game pag again, everytime you go home, */}
    </div>
  );
}
