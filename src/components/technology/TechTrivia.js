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
