import { Context, createContext } from 'react';
import { IGameState } from './IGameState';

const GameContext: Context<IGameState> = createContext<IGameState>({} as IGameState);

export default GameContext;
