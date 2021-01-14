import React, { useReducer } from "react";
import { node } from "prop-types";

import { initialState, reducers } from "./reducers";
import action from "./actions";

export const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const setResult = (data) => {
    dispatch({ type: action.SET_RESULT, payload: data });
  };

  const clearResult = () => {
    dispatch({ type: action.CLEAR_RESULT });
  };

  const setGameDetails = (data) => {
    dispatch({ type: action.SET_GAME_DETAIL, payload: data });
  };

  const clearGameDetails = () => {
    dispatch({ type: action.CLEAR_GAME_DETAIL });
  };

  const exported = {
    value: state,
    setResult,
    setGameDetails,
    clearResult,
    clearGameDetails,
  };

  return (
    <GameContext.Provider value={exported}>{children}</GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: node.isRequired,
};

export default GameProvider;
