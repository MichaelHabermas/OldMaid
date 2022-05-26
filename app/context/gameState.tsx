// libraries
import React, { useEffect, useReducer, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

// contexts & reducers
import GameContext from './gameContext';
import gameReducer from './gameReducer';

//interfaces
import { IGameState } from './IGameState';
export interface ICard {
   id: string;
   name: string;
   image: ImageSourcePropType;
}
export interface IPlayerHands {
   userHand: ICard[] | null;
   opponentHand: ICard[] | null;
}

// assets
import { assets } from '../../assets';

const initialState: IGameState = {
   playerHands: {
      userHand: [],
      opponentHand: [],
   },
};

export const GameStateProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(gameReducer, {});

   const [deck, setDeck] = useState<ICard[]>([]);
   const [playerHands, setPlayerHands] = useState<IPlayerHands>(initialState.playerHands);

   useEffect(() => {
      setDeck(shuffleDeck(shuffleDeck(deckBuilder(assets.cardFaces))));
   }, []);

   useEffect(() => {
      setPlayerHands(reduceHands(splitDeckInHalf(deck)));
   }, [deck]);

   const deckBuilder = (assetCollection: Record<string, ImageSourcePropType>): ICard[] => {
      let assetArr: ICard[] = [];

      for (let asset in assetCollection) {
         for (let i = 1; i < 5; i++) {
            let newCardObj: ICard = {
               id: `${asset}${i}`,
               name: `${asset}`,
               image: assetCollection[asset],
            };

            assetArr.push(newCardObj);
            if (asset === 'cQueen') break;
         }
      }
      return assetArr;
   };

   const shuffleDeck = (deck: ICard[]): ICard[] => {
      deck.forEach((_, index) => {
         let randPos = Math.floor(Math.random() * deck.length);
         [deck[index], deck[randPos]] = [deck[randPos], deck[index]];
      });
      return deck;
   };

   const splitDeckInHalf = (deck: ICard[]): IPlayerHands => {
      const half: number = Math.ceil(deck.length / 2);
      const opponentHand: ICard[] = deck.slice(0, half);
      const userHand: ICard[] = deck.slice(half, deck.length);
      return { userHand, opponentHand };
   };

   function reduceHands(hands: IPlayerHands): IPlayerHands {
      let reducedHands: IPlayerHands = {
         userHand: [],
         opponentHand: [],
      };
      for (let hand in hands) {
         const reducedHand: ICard[] = removePairs(hands[hand]);
         reducedHands[hand] = reducedHand;
      }
      return reducedHands;
   }

   const removePairs = (handOfCards: ICard[]): ICard[] => {
      let newHand: ICard[] = [];

      for (let cardName in assets.cardFaces) {
         const cardsOfAKind: ICard[] = handOfCards.filter((card) => {
            return cardName === card.name;
         });
         if (cardsOfAKind.length % 2 !== 0) {
            newHand.push(cardsOfAKind[0]);
         }
      }
      return newHand;
   };

   return (
      <GameContext.Provider
         value={{
            playerHands,
         }}
      >
         {children}
      </GameContext.Provider>
   );
};
