// libraries
import React, { useContext, useEffect } from 'react';
import { Image, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import GameContext from '../contexts/gameContext/gameContext';

// components
import Background from '../components/Background';

// types, enums, & interfaces
import { backgroundImage, IScreenProps } from './screenTypes';
import { soundEffects } from '../contexts/gameContext/gameInterfaces';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const GamePlayScreen = ({ navigation, route }: IScreenProps): JSX.Element => {
   const { character, opponent } = route.params;
   const { common, otherCards } = assets;

   const { playerHands, isUserTurn, gameOver, removedCard, playSound, resetGame, takePlayerTurn } =
      useContext(GameContext);
   const { userHand, opponentHand } = playerHands;

   useEffect(() => {
      if (gameOver === true) {
         navigateToGameOverScreen();
         resetGame();
         // TODO: handle the game over message
      }
   }, [gameOver]);

   const navigateToGameOverScreen = (): boolean => navigation.navigate('GameOver');

   const handleOptionsPress = async (): Promise<void> => {
      await playSound(soundEffects.mainBtn).finally(() => navigation.navigate('Start'));
      resetGame();
   };

   return (
      <Background backgroundAsset={backgroundImage.eveningSky}>
         <TouchableOpacity onPress={handleOptionsPress} style={styles.gps_options_button}>
            <Image source={common.sunOptionsBtn} />
         </TouchableOpacity>

         <TouchableWithoutFeedback
            onPress={() => {
               if (isUserTurn) takePlayerTurn(userHand, opponentHand);
            }}
         >
            <View style={styles.gps_opponent_contents}>
               <View style={styles.gps_opponent_character}>
                  <Image source={assets.charSelect.plate} style={styles.gps_plate} />
                  <Image source={opponent.image} style={styles.gps_character} />
               </View>
               <View style={styles.gps_opponent_cards_container}>
                  {opponentHand?.map((card) => (
                     <Image key={card.id} source={otherCards.cardBackDefault} style={styles.gps_card} />
                  ))}
               </View>
            </View>
         </TouchableWithoutFeedback>

         {removedCard && (
            <View style={styles.gps_pair_container}>
               {removedCard?.name === 'cQueen' ? (
                  <Image source={removedCard.image} style={[styles.gps_card, styles.gps_passed_queen]} />
               ) : (
                  <View>
                     <Image source={removedCard?.image} style={[styles.gps_card, styles.gps_pair_left]} />
                     <Image source={removedCard?.image} style={[styles.gps_card, styles.gps_pair_right]} />
                  </View>
               )}
            </View>
         )}

         <TouchableWithoutFeedback
            onPress={() => {
               if (!isUserTurn) takePlayerTurn(opponentHand, userHand);
            }}
         >
            <View style={styles.gps_player_contents}>
               <View style={styles.gps_player_cards_container}>
                  {userHand?.map((card) => (
                     <Image key={card.id} source={card.image} style={styles.gps_card} />
                  ))}
               </View>
               <View style={styles.gps_player_character}>
                  <Image source={assets.charSelect.plate} style={styles.gps_plate} />
                  <Image source={character.image} style={styles.gps_character} />
               </View>
            </View>
         </TouchableWithoutFeedback>
      </Background>
   );
};

export default GamePlayScreen;
