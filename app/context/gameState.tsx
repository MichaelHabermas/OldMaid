import React, { useReducer } from 'react';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import { IGameState } from './IGameState';

const initialState: IGameState = {
  initialGameValue: 1,
};

export const GameStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return <GameContext.Provider value={initialState}>{children}</GameContext.Provider>;
};
