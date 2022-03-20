import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TechContext } from "../../contexts/techContext";
import ResultImg from "../../components/images/Frame11.png";

export default function ScienceResult() {
  const [triviaState, dispatch] = useContext(TechContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "RESTART" });
    navigate("/spin");
  };

  return (
    <div
      style={{
        width: "950px",
        textAlign: "center",
      }}
    >
      {triviaState.correctAnswerCount === triviaState.trivias.length ? (
        <h1 className="resultMsg">You won!</h1>
      ) : (
        <h1 className="resultMsg">Game over</h1>
      )}
      <table>
        <tr>
          <td style={{ width: "500px" }}>
            <img src={ResultImg} alt="Result" width="475" />
          </td>
          <td style={{ width: "450px" }}>
            <h3 className="categoryTxt" style={{ margin: "0px" }}>
              you got
            </h3>
            <h1 className="resultTxt">{triviaState.correctAnswerCount}</h1>
            <button className="startBtn" onClick={handleClick}>
              AGAIN
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
