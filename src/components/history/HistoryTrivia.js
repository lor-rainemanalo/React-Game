import React, { useContext } from "react";
import Header from "../Header";
import Trivia from "./History";
import Result from "./HistoryResult";
import { HistoryContext } from "../../contexts/historyContext";

export default function HistoryTrivia() {
  const [triviaState, dispatch] = useContext(HistoryContext);

  return (
    <>
      <div className="screen">
        <Header />
        {triviaState.showResults && <Result />}
        {!triviaState.showResults && (
          <div>
            <div className="triviaFrame">
              <div className="triviaNo">
                Trivia {triviaState.currentTriviaIndex + 1}
              </div>
              <div className="triviaTxt">
                <Trivia />
              </div>
            </div>
            <button
              className="startBtn"
              onClick={() => dispatch({ type: "NEXT_TRIVIA" })}
            >
              NEXT
            </button>
          </div>
        )}
        <div></div>
      </div>
    </>
  );
}
