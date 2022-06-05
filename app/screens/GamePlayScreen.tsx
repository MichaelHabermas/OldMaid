// libraries
import React, { useContext, useEffect, useState } from 'react';
import { Animated, Easing, Image, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
   const { charPlates, playerHands, isUserTurn, gameOver, removedCard, playSound, resetGame, takePlayerTurn } =
      useContext(GameContext);
   const { userHand, opponentHand } = playerHands;
   const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

   useEffect(() => {
      if (gameOver === true) {
         navigateToGameOverScreen();
         resetGame();
      }
   }, [gameOver]);

   const navigateToGameOverScreen = (): boolean => navigation.navigate('GameOver');

   const handleOptionsPress = async (): Promise<void> => {
      await playSound(soundEffects.mainBtn).finally(() => navigation.navigate('Start'));
      resetGame();
   };

   useEffect(() => {
      handleAnimation();
   }, [takePlayerTurn]);

   const handleAnimation = () => {
      Animated.timing(rotateAnimation, {
         duration: 1500,
         toValue: 1,
         useNativeDriver: true,
      }).start(() => {
         rotateAnimation.setValue(0);
      });
   };

   const animatedStyle = {
      transform: [
         {
            rotate: rotateAnimation.interpolate({
               inputRange: [0, 1],
               outputRange: ['0deg', '1080deg'],
            }),
         },
         {
            scaleX: rotateAnimation.interpolate({
               inputRange: [0, 0.5, 1],
               outputRange: [0, 3, 0],
            }),
         },
         {
            scaleY: rotateAnimation.interpolate({
               inputRange: [0, 0.5, 1],
               outputRange: [0, 3, 0],
            }),
         },
      ],
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
                  <Image source={charPlates?.opponentPlate?.image || common.plates.plate1} style={styles.gps_plate} />
                  <Image source={opponent?.image} style={styles.gps_character} />
               </View>

               <View style={styles.gps_opponent_cards_container}>
                  {opponentHand?.map((card) => (
                     <Image key={card.id} source={otherCards.cardBackDefault} style={styles.gps_card} />
                  ))}
               </View>
            </View>
         </TouchableWithoutFeedback>

         {removedCard && (
            <Animated.View style={[styles.gps_pair_container, animatedStyle]}>
               {removedCard?.name === 'cQueen' ? (
                  <Image source={removedCard.image} style={[styles.gps_card, styles.gps_passed_queen]} />
               ) : (
                  <View>
                     <Image source={removedCard?.image} style={[styles.gps_card, styles.gps_pair_left]} />
                     <Image source={removedCard?.image} style={[styles.gps_card, styles.gps_pair_right]} />
                  </View>
               )}
            </Animated.View>
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
                  <Image source={charPlates?.userPlate?.image} style={styles.gps_plate} />
                  <Image source={character.image} style={styles.gps_character} />
               </View>
            </View>
         </TouchableWithoutFeedback>
      </Background>
   );
};

export default GamePlayScreen;
