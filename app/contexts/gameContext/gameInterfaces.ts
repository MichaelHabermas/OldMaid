import { ImageSourcePropType } from 'react-native';

export interface IGameState {
   playerHands: IPlayerHands;
   gameOver: boolean;
   removedCard: ICard | null;
   isUserTurn: boolean;
   resetGame: () => void;
   setGameOver: (gamePlayState: boolean) => void;
   takePlayerTurn: (cardsOfTaker: ICard[], cardsOfBeingTaken: ICard[]) => void;
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
