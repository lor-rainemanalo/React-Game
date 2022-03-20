import React, { useContext } from "react";
import Header from "../Header";
import Trivia from "./General";
import Result from "./GeneralResult";
import { TriviaContext } from "../../contexts/generalContext";

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
