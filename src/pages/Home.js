import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodal from "rodal";
import Title from "../components/images/title.png";
import Frame2 from "../components/images/Frame 2.png";
import Rules from "../components/images/rules.png";
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
                  RULES
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
          backgroundColor: "#393359",
          borderRadius: "20px",
          padding: "15px 35px",
        }}
        height={290}
      >
        <div>
          <p style={{ margin: "0 0 5px 0" }}>
            <img src={Rules} alt="Rules" width="145" />
          </p>
          <p className="rulesTxt">① Spin for a category.</p>
          <p className="rulesTxt">
            ② Click PLAY to proceed or SPIN AGAIN if so desired.
          </p>
          <p className="rulesTxt">
            ③ Try to answer the trivias displayed correctly.
          </p>
          <p className="rulesTxt">
            ④ The game ends once all trivias have been answered.
          </p>
          <p className="rulesTxt">
            ⑤ View the results! Go again if so desired.
          </p>
          <p className="rulesTxt">
            ⑥ YOU WIN if all trivias are answered correctly.
          </p>
          <p className="rulesTxt">⑦ Otherwise, GAME OVER and you lose.</p>
          <br />
          <button className="startBtn" onClick={handleCancel}>
            OK
          </button>
        </div>
      </Rodal>
    </div>
  );
}
