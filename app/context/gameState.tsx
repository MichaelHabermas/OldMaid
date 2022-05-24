import React, { useEffect, useReducer, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import GameContext from './gameContext';
import gameReducer from './gameReducer';
import { IGameState } from './IGameState';

const initialState: IGameState = {
   initialGameValue: 1,
   playerHands: {
      userHand: [],
      opponentHand: [],
   },
};

export interface ICard {
   id: number;
   name: string;
   image: ImageSourcePropType;
}

export interface IPlayerHands {
   userHand: ICard[] | null;
   opponentHand: ICard[] | null;
}

export const GameStateProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(gameReducer, {});

   const [playerHands, setPlayerHands] = useState<IPlayerHands>();

   const testString: string = 'SHANAE IS LAUGHING AT ME';

   const testFunc = (name: string): string => {
      return `Hi ${name}`;
   };

   useEffect(() => {
      console.log('useEffect');
   }, []);

   const assetArrayBuilder = (assetCollection) => {
      let assetArr: ICard[] = [];
      let currentId: number = 0;

      for (let asset in assetCollection) {
         let assetObj: ICard = {
            id: currentId,
            name: `${asset}`,
            image: assetCollection[asset],
         };

         assetArr.push(assetObj);
         currentId++;
      }

      return assetArr;
   };

   return (
      <GameContext.Provider
         value={{
            testString,
            testFunc,
         }}
      >
         {children}
      </GameContext.Provider>
   );
};
