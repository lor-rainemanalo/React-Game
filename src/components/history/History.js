import React, { useContext } from "react";
import { HistoryContext } from "../../contexts/historyContext";
import Answer from "../Answer";

export default function History() {
  const [triviaState, dispatch] = useContext(HistoryContext);
  const currentTrivia = triviaState.trivias[triviaState.currentTriviaIndex];

  return (
    <div>
      <div>{currentTrivia.trivia}</div>
      <div className="choices">
        {triviaState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={triviaState.currentAnswer}
            correctAnswer={currentTrivia.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
}
