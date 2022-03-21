import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TriviaContext } from "../contexts/generalContext";
import Title from "../components/images/title.png";

export default function Header() {
  const [dispatch] = useContext(TriviaContext);

  const handleClick = () => {
    dispatch({ type: "RESTART" });
  };

  return (
    <nav>
      <Link to="/" onClick={handleClick} style={{ float: "left" }}>
        <img src={Title} alt="Title" height="65" />
      </Link>
      <button className="icon">LN</button>
    </nav>
  );
}
