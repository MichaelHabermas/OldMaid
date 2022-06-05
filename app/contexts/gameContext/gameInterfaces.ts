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
   userHand: IImageAsset[];
   opponentHand: IImageAsset[];
}

export interface IImageAsset {
   id: string;
   name: string;
   image: ImageSourcePropType;
}

export interface ICharPlates {
   userPlate: IImageAsset;
   opponentPlate: IImageAsset;
}

export interface IGameState {
   charPlates: ICharPlates;
   gameOver: boolean;
   gameOverMessage: ImageSourcePropType;
   isUserTurn: boolean;
   playerHands: IPlayerHands;
   removedCard: IImageAsset | null;

   handleSwitchPlate: () => void;
   playSound: (soundEffect: soundEffects) => Promise<void>;
   resetGame: () => void;
   setGameOver: (gamePlayState: boolean) => void;
   setGameOverMessage: (message: ImageSourcePropType) => void;
   takePlayerTurn: (cardsOfTaker: IImageAsset[], cardsOfBeingTaken: IImageAsset[]) => void;
}
