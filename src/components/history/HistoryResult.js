import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { HistoryContext } from "../../contexts/historyContext";
import ResultImg from "../../components/images/Frame 5.png";

export default function Result() {
  const [triviaState, dispatch] = useContext(HistoryContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "RESTART" });
    navigate("/spin");
  };

  var end = Date.now() + 3 * 1000;

  var colors = ["#e088ff", "#ffffff"];

  return (
    <div
      style={{
        width: "950px",
        textAlign: "center",
      }}
    >
      {triviaState.correctAnswerCount === triviaState.trivias.length ? (
        <h1
          className="resultMsg animate__animated animate__tada animate__infinite"
          onLoad={(function frame() {
            confetti({
              particleCount: 2,
              angle: 40,
              spread: 55,
              origin: { x: 0.2 },
              colors: colors,
            });
            confetti({
              particleCount: 2,
              angle: 140,
              spread: 55,
              origin: { x: 0.8 },
              colors: colors,
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })()}
        >
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
            <img src={ResultImg} alt="Result" width="350" />
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
