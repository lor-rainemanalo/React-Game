import React, { useContext } from "react";
import Header from "../Header";
import Trivia from "./History";
import Result from "./HistoryResult";
import { HistoryContext } from "../../contexts/historyContext";

export default function HistoryTrivia() {
  const [triviaState, dispatch] = useContext(HistoryContext);
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
