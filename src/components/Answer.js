import React from "react";

export default function Answer({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) {
  //   const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "choiceRight" : "";
  const wrongAnswerClass = isWrongAnswer ? "choiceWrong" : "";
  const disabledClass = currentAnswer ? "choiceDisabled" : "";

  return (
    <div
      className={`choiceBtn ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      {/* <div>{letterMapping[index]}</div> */}
      <div>{answerText}</div>
    </div>
  );
}
