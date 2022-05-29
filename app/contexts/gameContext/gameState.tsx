// libraries
import React, { useEffect, useReducer, useState } from 'react';
import { ImageSourcePropType } from 'react-native';

// contexts & reducers
import GameContext from './gameContext';
import gameReducer from './gameReducer';

// interfaces
import { IPlayerHands, ICard } from './gameInterfaces';

// assets
import { assets } from '../../../assets';

export const GameStateProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(gameReducer, {});

   const [deck, setDeck] = useState<ICard[]>([]);
   const [playerHands, setPlayerHands] = useState<IPlayerHands>({
      userHand: [],
      opponentHand: [],
   });
   const [isUserTurn, setIsUserTurn] = useState<boolean>(true);
   const [gameOver, setGameOver] = useState<boolean>(false);
   const [removedCard, setRemovedCard] = useState<ICard | null>(null);

   const theQueen: ICard = {
      id: 'cQueen',
      name: 'cQueen',
      image: assets.cardFaces.cQueen,
   };

   useEffect(() => {
      setDeck(shuffleDeck(deckBuilder(assets.cardFaces)));
   }, []);

   useEffect(() => {
      setPlayerHands(reduceHands(splitDeckInHalf(deck)));
   }, [deck]);

   useEffect(() => {
      const { opponentHand, userHand } = playerHands;
      if (
         opponentHand &&
         userHand &&
         ((opponentHand.length === 1 && userHand.length === 0) || (opponentHand.length === 0 && userHand.length === 1))
      ) {
         setGameOver(true);
      }
   }, [playerHands]);

   // TODO: these can go in a separate file
   const deckBuilder = (assetCollection: Record<string, ImageSourcePropType>): ICard[] => {
      let assetArr: ICard[] = [];

      for (let asset in assetCollection) {
         for (let i = 1; i < 5; i++) {
            if (asset === 'cQueen') {
               assetArr.push(theQueen);
               break;
            } else {
               let newCardObj: ICard = {
                  id: `${asset}${i}`,
                  name: `${asset}`,
                  image: assetCollection[asset],
               };
               assetArr.push(newCardObj);
            }
         }
      }
      return assetArr;
   };
   const randomizeDeck = (deck: ICard[]): ICard[] => {
      deck.forEach((_, index) => {
         let randPos = Math.floor(Math.random() * deck.length);
         [deck[index], deck[randPos]] = [deck[randPos], deck[index]];
      });
      return deck;
   };
   const shuffleDeck = (deck: ICard[]): ICard[] => {
      return randomizeDeck(randomizeDeck(randomizeDeck(deck)));
   };
   const splitDeckInHalf = (deck: ICard[]): IPlayerHands => {
      const half: number = Math.ceil(deck.length / 2);
      const opponentHand: ICard[] = deck.slice(0, half);
      const userHand: ICard[] = deck.slice(half);
      return { userHand, opponentHand };
   };
   const reduceHands = (hands: IPlayerHands): IPlayerHands => {
      let reducedHands: IPlayerHands = {
         userHand: [],
         opponentHand: [],
      };
      for (let hand in hands) {
         const reducedHand: ICard[] = removePairs(hands[hand]);
         reducedHands[hand] = reducedHand;
      }
      return reducedHands;
   };
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

   const resetGame = (): void => {
      setPlayerHands(reduceHands(splitDeckInHalf(shuffleDeck(deck))));
      setRemovedCard(null);
      setIsUserTurn(true);
      setGameOver(false);
   };

   // handles each player taking their turn
   const takePlayerTurn = (cardsOfTaker: ICard[], cardsOfBeingTaken: ICard[]): void => {
      const chosenCardIndex: number = Math.floor(Math.random() * cardsOfBeingTaken.length);
      const chosenCard: ICard = cardsOfBeingTaken[chosenCardIndex];

      let newCardsOfBeingTakenHand: ICard[];
      let newCardsOfTakerHand: ICard[];

      if (chosenCard.name === 'cQueen') {
         newCardsOfBeingTakenHand = [...cardsOfBeingTaken.filter((item) => item.name !== 'cQueen')];
         newCardsOfTakerHand = [...cardsOfTaker, theQueen];
      } else {
         newCardsOfBeingTakenHand = [...cardsOfBeingTaken.filter((item) => item.name !== chosenCard.name)];
         newCardsOfTakerHand = [...cardsOfTaker.filter((item) => item.name !== chosenCard.name)];
      }
      setRemovedCard(chosenCard);

      const newState: IPlayerHands = {
         userHand: isUserTurn ? newCardsOfTakerHand : newCardsOfBeingTakenHand,
         opponentHand: isUserTurn ? newCardsOfBeingTakenHand : newCardsOfTakerHand,
      };

      setPlayerHands(newState);
      setIsUserTurn(!isUserTurn);
   };

   return (
      <GameContext.Provider
         value={{
            gameOver,
            isUserTurn,
            playerHands,
            removedCard,
            resetGame,
            setGameOver,
            takePlayerTurn,
         }}
      >
         {children}
      </GameContext.Provider>
   );
};
