import React, { createContext, useReducer } from "react";
import { shuffleAnswers } from "../helpers";
import trivias from "../trivias/general";

const initialState = {
  trivias,
  currentTriviaIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(trivias[0]),
  currentAnswer: "",
};

const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload === state.trivias[state.currentTriviaIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;

      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    }
    case "NEXT_TRIVIA": {
      const showResults = state.currentTriviaIndex === state.trivias.length - 1;
      const currentTriviaIndex = showResults
        ? state.currentTriviaIndex
        : state.currentTriviaIndex + 1;

      return {
        ...state,
        currentTriviaIndex,
        showResults,
      };
    }
    case "RESTART": {
      return initialState;
    }

    default:
      return state;
  }
};

export const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>
  );
};
