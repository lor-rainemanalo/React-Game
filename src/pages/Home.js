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
        <tr>
          <td style={{ width: "500px" }}>
            <img src={Title} alt="Title" width="480" />
            <div style={{ margin: "0 0 15px 25px", textAlign: "left" }}>
              <button
                className="startBtn"
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
      </table>

      <Rodal visible={isModalVisible} onClose={handleCancel}>
        <div>How to play ...</div>
        <p>asdasad</p>
        <p>sddsdfggdd</p>
      </Rodal>
    </div>
  );
}
