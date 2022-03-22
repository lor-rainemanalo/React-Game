import React, { useState } from "react";
import Rodal from "rodal";
import { useNavigate } from "react-router-dom";
import "rodal/lib/rodal.css";
import CategoryImg from "../components/images/Frame 6.png";

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
        //edit modal styles here
        customStyles={{
          backgroundColor: "#393359",
          borderRadius: "20px",
          padding: "15px 35px",
        }}
      >
        <center>
          <p className="categoryTxt">{category}</p>
          <img src={CategoryImg} alt="Category" width="115" />
        </center>
        <div style={{ textAlign: "center", padding: "27px 0 0 0" }}>
          <button
            className="spinAgainBtn"
            onClick={handleCancel}
            style={{ width: "160px" }}
          >
            SPIN AGAIN
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {category === " General" && (
            <button className="playBtn" onClick={() => navigate("/general")}>
              PLAY
            </button>
          )}
          {category === " Science" && (
            <button className="playBtn" onClick={() => navigate("/science")}>
              PLAY
            </button>
          )}
          {category === " History" && (
            <button className="playBtn" onClick={() => navigate("/history")}>
              PLAY
            </button>
          )}
          {category === " Technology" && (
            <button className="playBtn" onClick={() => navigate("/technology")}>
              PLAY
            </button>
          )}
        </div>
      </Rodal>
    </>
  );
}
