import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <h3>Error! Page not found.</h3>
      <button onClick={() => navigate("/")}>Go back to main screen</button>
    </>
  );
}
