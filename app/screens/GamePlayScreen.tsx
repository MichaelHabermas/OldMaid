// libraries
import { Image, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useEffect } from 'react';
import GameContext from '../contexts/gameContext/gameContext';

// components
import Background from '../components/Background';

// types, enums, & interfaces
import { backgroundImage, IScreenProps } from './screenTypes';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const GamePlayScreen = ({ navigation, route }: IScreenProps): JSX.Element => {
   const { character, opponent } = route.params;
   const { common, otherCards } = assets;

   const { playerHands, isUserTurn, gameOver, removedCard, resetGame, setGameOver, takePlayerTurn } =
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

   return (
      <Background backgroundAsset={backgroundImage.fullGrass}>
         <TouchableOpacity onPress={navigateToGameOverScreen} style={styles.gps_options_button}>
            <Image source={common.optionsButton} />
         </TouchableOpacity>

         <TouchableWithoutFeedback
            onPress={() => {
               if (isUserTurn) takePlayerTurn(userHand, opponentHand);
            }}
         >
            <View style={styles.gps_opponent_contents}>
               <View style={styles.gps_opponent_character}>
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
                  <Image source={character.image} style={styles.gps_character} />
               </View>
            </View>
         </TouchableWithoutFeedback>
      </Background>
   );
};

export default GamePlayScreen;
