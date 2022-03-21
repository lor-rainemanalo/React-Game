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
