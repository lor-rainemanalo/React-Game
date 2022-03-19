import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodal from "rodal";

import "rodal/lib/rodal.css";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <h1>Game Name</h1>
      <button
        onClick={() => {
          navigate("/spin");
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        how to play
      </button>

      <Rodal visible={isModalVisible} onClose={handleCancel}>
        <div>How to play ...</div>
        <p>asdasad</p>
        <p>sddsdfggdd</p>
      </Rodal>
    </div>
  );
}
