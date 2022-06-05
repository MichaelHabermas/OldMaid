// libraries
import React, { useEffect, useReducer, useState } from 'react';
import { Audio } from 'expo-av';

// contexts & reducers
import GameContext from './gameContext';
import gameReducer from './gameReducer';

// types, enums, & interfaces
import { ICharPlates, IPlayerHands, IImageAsset, soundEffects } from './gameInterfaces';
import { ImageSourcePropType } from 'react-native';

// helpers
import { buildAndShuffleDeck, dealAndReduceDeck, resetHands } from './helpers';

// assets
import { assets } from '../../../assets';
import { theQueen } from './helpers';
import assetArrayBuilder from '../../helpers/assetArrayBuilder';

export const GameStateProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(gameReducer, {});

   const [soundEffect, setSoundEffect] = useState<Audio.Sound>();
   const [deck, setDeck] = useState<IImageAsset[]>([]);
   const [isUserTurn, setIsUserTurn] = useState<boolean>(true);
   const [gameOver, setGameOver] = useState<boolean>(false);
   const [removedCard, setRemovedCard] = useState<IImageAsset | null>(null);
   const [playerHands, setPlayerHands] = useState<IPlayerHands>({
      userHand: [],
      opponentHand: [],
   });
   const [plates, setPlates] = useState<IImageAsset[]>([
      {
         id: '1',
         name: '1',
         image: assets.common.plates.plate1,
      },
   ]);
   const [plateIdx, setPlateIdx] = useState<number>(0);
   const [charPlates, setCharPlates] = useState<ICharPlates>({
      userPlate: {
         id: '1',
         name: '1',
         image: assets.common.plates.plate1,
      },
      opponentPlate: {
         id: '2',
         name: '2',
         image: assets.common.plates.plate2,
      },
   });
   const [gameOverMessage, setGameOverMessage] = useState<ImageSourcePropType>(assets.gameOverScreen.loseMessage);

   const { opponentHand, userHand } = playerHands;
   const isGameOverConditionMet: boolean =
      opponentHand &&
      userHand &&
      ((opponentHand.length === 1 && userHand.length === 0) || (opponentHand.length === 0 && userHand.length === 1));

   useEffect(() => {
      setDeck(buildAndShuffleDeck());
      setPlates(assetArrayBuilder(assets.common.plates));
   }, []);

   useEffect(() => {
      setPlayerHands(dealAndReduceDeck(deck));
   }, [deck]);

   useEffect(() => {
      setCharPlates({
         userPlate: plates[plateIdx],
         opponentPlate: plates[Math.floor(Math.random() * plates.length - 1)],
      });
   }, [plateIdx]);

   useEffect(() => {
      if (isGameOverConditionMet) {
         setGameOver(true);
         playerHands.userHand.length === 0 && setGameOverMessage(assets.gameOverScreen.winMessage);
      }
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
      setPlayerHands(resetHands(deck));
      setRemovedCard(null);
      setIsUserTurn(true);
      setGameOver(false);
   };

   /**
    * handles choosing plate for char select
    * */
   const handleSwitchPlate = (): void => {
      playSound(soundEffects.cupBtnSFX);
      plateIdx === plates.length - 1 ? setPlateIdx(0) : setPlateIdx(plateIdx + 1);
   };

   /**
    * handles each player taking their turn
    * */
   const takePlayerTurn = (cardsOfTaker: IImageAsset[], cardsOfBeingTaken: IImageAsset[]): void => {
      const chosenCardIndex: number = Math.floor(Math.random() * cardsOfBeingTaken.length);
      const chosenCard: IImageAsset = cardsOfBeingTaken[chosenCardIndex];

      let newCardsOfBeingTakenHand: IImageAsset[];
      let newCardsOfTakerHand: IImageAsset[];

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
            charPlates,
            gameOver,
            gameOverMessage,
            isUserTurn,
            playerHands,
            removedCard,

            handleSwitchPlate,
            playSound,
            resetGame,
            setGameOver,
            setGameOverMessage,
            takePlayerTurn,
         }}
      >
         {children}
      </GameContext.Provider>
   );
};
