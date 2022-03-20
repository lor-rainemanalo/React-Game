import React, { useContext } from "react";
import Header from "../Header";
import { TechContext } from "../../contexts/techContext";
import Trivia from "./Tech";
import Result from "./TechResult";

export default function ScienceTrivia() {
  const [triviaState, dispatch] = useContext(TechContext);
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
