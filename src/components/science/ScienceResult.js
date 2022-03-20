import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScienceContext } from "../../contexts/scienceContext";
import ResultImg from "../../components/images/Frame 8.png";

export default function ScienceResult() {
  const [triviaState, dispatch] = useContext(ScienceContext);
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
        <h1 className="resultMsg animate__animated animate__tada animate__infinite">
          You won!
        </h1>
      ) : (
        <h1 className="resultMsg animate__animated animate__flash animate__slower animate__infinite">
          Game over
        </h1>
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
