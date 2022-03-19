import React from "react";

export default function Answer({ answerText, index, onSelectAnswer }) {
  //   const letterMapping = ["A", "B", "C", "D"];

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        margin: "1rem",
        cursor: "pointer",
      }}
      onClick={() => onSelectAnswer(answerText)}
    >
      {/* <div>{letterMapping[index]}</div> */}
      <div>{answerText}</div>
    </div>
  );
}
