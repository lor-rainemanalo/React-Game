import React, { useContext } from "react";
import Header from "../components/Header";
import Trivia from "../components/Trivia";
import Result from "../pages/Result";
import { TriviaContext } from "../contexts/trivia";
//Quiz.js
export default function GeneralTrivia() {
  const [triviaState, dispatch] = useContext(TriviaContext);
  console.log("triviastate", triviaState);
  return (
    <>
      <Header />
      {triviaState.showResults && <Result />}
      {!triviaState.showResults && (
        <div>
          <div>
            Question {triviaState.currentTriviaIndex + 1} /{" "}
            {triviaState.trivias.length}
          </div>
          <Trivia />
          <div>
            <button onClick={() => dispatch({ type: "NEXT_TRIVIA" })}>
              Next trivia
            </button>
          </div>
        </div>
      )}
    </>
  );
}
