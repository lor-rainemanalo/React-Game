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
        {category === "General" && (
          <button onClick={() => navigate("/general")}>Play</button>
        )}
        {category === "Science" && (
          <button onClick={() => navigate("/science")}>Play</button>
        )}
        {category === "History" && (
          <button onClick={() => navigate("/history")}>Play</button>
        )}
        {category === "Technology" && (
          <button onClick={() => navigate("/technology")}>Play</button>
        )}
      </Rodal>
    </>
  );
}
