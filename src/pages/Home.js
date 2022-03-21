import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodal from "rodal";
import Title from "../components/images/title.png";
import Frame2 from "../components/images/Frame 2.png";
import "rodal/lib/rodal.css";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="screen">
      <table>
        <tbody>
          <tr>
            <td style={{ width: "500px" }}>
              <img src={Title} alt="Title" width="480" />
              <div style={{ margin: "40px 0 15px 15px", textAlign: "left" }}>
                <button
                  className="startBtn animate__animated animate__pulse animate__slow animate__infinite"
                  onClick={() => {
                    navigate("/spin");
                  }}
                >
                  START
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="spinAgainBtn"
                  onClick={() => {
                    setIsModalVisible(true);
                  }}
                >
                  MENU
                </button>
              </div>
            </td>
            <td style={{ width: "500px" }}>
              <img src={Frame2} alt="Frame2" width="480" />
            </td>
          </tr>
        </tbody>
      </table>

      <Rodal
        visible={isModalVisible}
        onClose={handleCancel}
        customStyles={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow:
            "inset 0px 5.67258px 5.67258px rgba(255, 255, 255, 0.16), inset 0px 0px 45.3806px rgba(255, 255, 255, 0.08)",
          borderRadius: "20px",
          padding: "55px 35px",
        }}
      >
        <div>
          <button className="menuBtn howToPlay">HOW TO PLAY</button>
          <button className="menuBtn references">REFERENCE</button>
          <button className="menuBtn quit">QUIT (???)</button>
        </div>
      </Rodal>
    </div>
  );
}
