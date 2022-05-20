import React, { useReducer } from 'react';
import gameContext from './gameContext';
const gameState = (props) => {
  const initialState = {};
  // const [state, dispatch] = useReducer()
  return <gameContext.Provider value={{}}>{props.children}</gameContext.Provider>;
};
export default gameState;
