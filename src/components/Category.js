import React, { useState } from "react";
import Rodal from "rodal";
import { useNavigate } from "react-router-dom";

import "rodal/lib/rodal.css";

export default function Category({ category, bgColor }) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Rodal
        visible={isModalVisible}
        onClose={handleCancel}
        showCloseButton={false}
        closeMaskOnClick={false}
        customStyles={{ backgroundColor: bgColor }} //edit modal styles here
      >
        <h2>{category}</h2>
        {/* <img alt="Category" /> */}
        <button onClick={handleCancel}>Spin again</button>
        <button onClick={() => navigate("/trivia")}>Play</button>
      </Rodal>
    </>
  );
}
