import { ImageSourcePropType } from 'react-native';
import { IImageAsset, IPlayerHands } from '../gameInterfaces';
import { assets } from '../../../../assets';

export const theQueen: IImageAsset = {
   id: 'cQueen',
   name: 'cQueen',
   image: assets.cardFaces.cQueen,
};

export const deckBuilder = (assetCollection: Record<string, ImageSourcePropType>): IImageAsset[] => {
   let assetArr: IImageAsset[] = [];

   for (let asset in assetCollection) {
      for (let i = 1; i < 5; i++) {
         if (asset === 'cQueen') {
            assetArr.push(theQueen);
            break;
         } else {
            let newCardObj: IImageAsset = {
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

const randomizeDeck = (deck: IImageAsset[]): IImageAsset[] => {
   deck.forEach((_, index) => {
      let randPos = Math.floor(Math.random() * deck.length);
      [deck[index], deck[randPos]] = [deck[randPos], deck[index]];
   });
   return deck;
};

const shuffleDeck = (deck: IImageAsset[]): IImageAsset[] => {
   return randomizeDeck(randomizeDeck(randomizeDeck(deck)));
};

const splitDeckInHalf = (deck: IImageAsset[]): IPlayerHands => {
   const half: number = Math.ceil(deck.length / 2);
   const opponentHand: IImageAsset[] = deck.slice(0, half);
   const userHand: IImageAsset[] = deck.slice(half);
   return { userHand, opponentHand };
};

const reduceHands = (hands: IPlayerHands): IPlayerHands => {
   let reducedHands: IPlayerHands = {
      userHand: [],
      opponentHand: [],
   };
   for (let hand in hands) {
      const reducedHand: IImageAsset[] = removePairs(hands[hand]);
      reducedHands[hand] = reducedHand;
   }
   return reducedHands;
};

const removePairs = (handOfCards: IImageAsset[]): IImageAsset[] => {
   let newHand: IImageAsset[] = [];
   for (let cardName in assets.cardFaces) {
      const cardsOfAKind: IImageAsset[] = handOfCards.filter((card) => {
         return cardName === card.name;
      });
      if (cardsOfAKind.length % 2 !== 0) {
         newHand.push(cardsOfAKind[0]);
      }
   }
   return newHand;
};

export const buildAndShuffleDeck = (): IImageAsset[] => shuffleDeck(deckBuilder(assets.cardFaces));

export const dealAndReduceDeck = (deck: IImageAsset[]): IPlayerHands => reduceHands(splitDeckInHalf(deck));

export const resetHands = (deck: IImageAsset[]): IPlayerHands => reduceHands(splitDeckInHalf(shuffleDeck(deck)));
