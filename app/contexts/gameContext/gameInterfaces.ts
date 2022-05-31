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
   playerHands: IPlayerHands;
   gameOver: boolean;
   removedCard: IImageAsset | null;
   isUserTurn: boolean;
   charPlates: ICharPlates;

   handleSwitchPlate: () => void;
   playSound: (soundEffect: soundEffects) => Promise<void>;
   resetGame: () => void;
   setGameOver: (gamePlayState: boolean) => void;
   takePlayerTurn: (cardsOfTaker: IImageAsset[], cardsOfBeingTaken: IImageAsset[]) => void;
}
