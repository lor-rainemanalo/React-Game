import React, { useContext } from "react";
import { ScienceContext } from "../../contexts/scienceContext";
import Answer from "../Answer";

export default function Science() {
  const [triviaState, dispatch] = useContext(ScienceContext);
  const currentTrivia = triviaState.trivias[triviaState.currentTriviaIndex];

  return (
    <div>
      <div>{currentTrivia.trivia}</div>
      <div>
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
