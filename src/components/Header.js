import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TriviaContext } from "../contexts/generalContext";

export default function Header() {
  const [dispatch] = useContext(TriviaContext);

  const handleClick = () => {
    dispatch({ type: "RESTART" });
  };

  return (
    <nav>
      <Link to="/" onClick={handleClick}>
        Home
      </Link>
    </nav>
  );
}
