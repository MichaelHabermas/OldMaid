// libraries
import React, { useEffect, useReducer, useState } from 'react';
import { Audio } from 'expo-av';

// contexts & reducers
import GameContext from './gameContext';
import gameReducer from './gameReducer';

// types, enums, & interfaces
import { IPlayerHands, ICard, soundEffects } from './gameInterfaces';

// helpers
import { deckBuilder, shuffleDeck, splitDeckInHalf, reduceHands } from './helpers';

// assets
import { assets } from '../../../assets';

export const theQueen: ICard = {
   id: 'cQueen',
   name: 'cQueen',
   image: assets.cardFaces.cQueen,
};

export const GameStateProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(gameReducer, {});

   const [soundEffect, setSoundEffect] = useState<Audio.Sound>();
   const [deck, setDeck] = useState<ICard[]>([]);
   const [isUserTurn, setIsUserTurn] = useState<boolean>(true);
   const [gameOver, setGameOver] = useState<boolean>(false);
   const [removedCard, setRemovedCard] = useState<ICard | null>(null);
   const [playerHands, setPlayerHands] = useState<IPlayerHands>({
      userHand: [],
      opponentHand: [],
   });
   const { opponentHand, userHand } = playerHands;
   const isGameOverConditionMet: boolean =
      opponentHand &&
      userHand &&
      ((opponentHand.length === 1 && userHand.length === 0) || (opponentHand.length === 0 && userHand.length === 1));

   useEffect(() => {
      setDeck(shuffleDeck(deckBuilder(assets.cardFaces)));
   }, []);

   useEffect(() => {
      setPlayerHands(reduceHands(splitDeckInHalf(deck)));
   }, [deck]);

   useEffect(() => {
      isGameOverConditionMet && setGameOver(true);
   }, [playerHands]);

   useEffect(() => {
      return soundEffect
         ? () => {
              soundEffect.unloadAsync();
           }
         : undefined;
   }, [soundEffect]);

   const playSound = async (soundFile: soundEffects): Promise<void> => {
      const { sound } = await Audio.Sound.createAsync(soundFile);
      setSoundEffect(sound);
      await sound.playAsync();
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

            playSound,
            resetGame,
            setGameOver,
            takePlayerTurn,
         }}
      >
         {children}
      </GameContext.Provider>
   );
};
