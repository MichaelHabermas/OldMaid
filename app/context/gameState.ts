import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';

const gameState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(gameReducer, initialState);
  const gameStateValue = {
    initialGameValue: 1,
  };

  return <GameContext.Provider value={gameStateValue}>{props.children}</GameContext.Provider>;
};
export default gameState;
