import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TriviaContext } from "../contexts/trivia";

export default function Header() {
  const [triviaState, dispatch] = useContext(TriviaContext);
  return (
    <nav>
      <Link to="/" onClick={() => dispatch({ type: "RESTART" })}>
        Home
      </Link>
    </nav>
  );
}
