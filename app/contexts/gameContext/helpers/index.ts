import { ImageSourcePropType } from 'react-native';
import { ICard, IPlayerHands } from '../gameInterfaces';
import { theQueen } from '../gameState';
import { assets } from '../../../../assets';

export const deckBuilder = (assetCollection: Record<string, ImageSourcePropType>): ICard[] => {
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

export const randomizeDeck = (deck: ICard[]): ICard[] => {
   deck.forEach((_, index) => {
      let randPos = Math.floor(Math.random() * deck.length);
      [deck[index], deck[randPos]] = [deck[randPos], deck[index]];
   });
   return deck;
};

export const shuffleDeck = (deck: ICard[]): ICard[] => {
   return randomizeDeck(randomizeDeck(randomizeDeck(deck)));
};

export const splitDeckInHalf = (deck: ICard[]): IPlayerHands => {
   const half: number = Math.ceil(deck.length / 2);
   const opponentHand: ICard[] = deck.slice(0, half);
   const userHand: ICard[] = deck.slice(half);
   return { userHand, opponentHand };
};

export const reduceHands = (hands: IPlayerHands): IPlayerHands => {
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

export const removePairs = (handOfCards: ICard[]): ICard[] => {
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
