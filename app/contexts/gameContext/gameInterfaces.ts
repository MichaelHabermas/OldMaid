// types, enums, & interfaces
import { ImageSourcePropType } from 'react-native';

// assets
import { gameAudio } from '../../../assets';
const { marimba, cardFlipSound, cupBtnSound } = gameAudio.soundFX;

export enum soundEffects {
   mainBtn = marimba,
   cardFlip = cardFlipSound,
   cupBtnSFX = cupBtnSound,
}

export interface IPlayerHands {
   userHand: ICard[];
   opponentHand: ICard[];
}

export interface ICard {
   id: string;
   name: string;
   image: ImageSourcePropType;
}

export interface IGameState {
   playerHands: IPlayerHands;
   gameOver: boolean;
   removedCard: ICard | null;
   isUserTurn: boolean;

   playSound: (soundEffect: soundEffects) => Promise<void>;
   resetGame: () => void;
   setGameOver: (gamePlayState: boolean) => void;
   takePlayerTurn: (cardsOfTaker: ICard[], cardsOfBeingTaken: ICard[]) => void;
}
