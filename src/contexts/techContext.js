import React, { createContext, useReducer } from "react";
import { shuffleAnswers } from "../helpers";
import trivias from "../data/technology";

const initialState = {
  trivias,
  currentTriviaIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(trivias[0]),
  currentAnswer: "",
};

const reducer = (state, action) => {
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

      const answers = showResults
        ? []
        : shuffleAnswers(state.trivias[currentTriviaIndex]);

      return {
        ...state,
        currentTriviaIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }

    default:
      return state;
  }
};

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <TechContext.Provider value={value}>{children}</TechContext.Provider>;
};
