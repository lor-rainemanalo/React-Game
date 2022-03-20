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
        <p className="categoryTxt">{category}</p>
        {/* <img alt="Category" /> */}
        <div style={{ textAlign: "center" }}>
          <button className="spinAgainBtn" onClick={handleCancel}>
            SPIN
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {category === " General" && (
            <button className="startBtn" onClick={() => navigate("/general")}>
              PLAY
            </button>
          )}
          {category === " Science" && (
            <button className="startBtn" onClick={() => navigate("/science")}>
              PLAY
            </button>
          )}
          {category === " History" && (
            <button className="startBtn" onClick={() => navigate("/history")}>
              PLAY
            </button>
          )}
          {category === " Technology" && (
            <button
              className="startBtn"
              onClick={() => navigate("/technology")}
            >
              PLAY
            </button>
          )}
        </div>
      </Rodal>
    </>
  );
}
