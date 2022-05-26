// libraries
import { Image, View, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import GameContext from '../context/gameContext';

// components
import Background from '../components/Background';

// types & interfaces
import { backgroundImage, IScreenProps } from './screenTypes';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const GamePlayScreen = ({ navigation, route }: IScreenProps): JSX.Element => {
   const { character, opponent } = route.params;
   const { common, otherCards } = assets;

   const { playerHands } = useContext(GameContext);
   const { userHand, opponentHand } = playerHands;

   const [pair, setPair] = useState<import('react-native').ImageSourcePropType>(assets.cardFaces.cKing);

   const handleBtnPress = (): boolean => navigation.navigate('GameOver');

   return (
      <Background backgroundAsset={backgroundImage.fullGrass}>
         <TouchableOpacity onPress={handleBtnPress} style={styles.gps_options_button}>
            <Image source={common.optionsButton} />
         </TouchableOpacity>

         <View style={styles.gps_opponent_contents}>
            <View style={styles.gps_opponent_character}>
               <Image source={opponent.image} style={styles.gps_character} />
            </View>
            <View style={styles.gps_opponent_cards_container}>
               <Image source={otherCards.cardBackDefault} style={styles.gps_card} />
            </View>
         </View>

         <View style={styles.gps_pair_container}>
            <Image source={pair} style={[styles.gps_card, styles.gps_pair_left]} />
            <Image source={pair} style={[styles.gps_card, styles.gps_pair_right]} />
         </View>

         <View style={styles.gps_player_contents}>
            <View style={styles.gps_player_cards_container}>
               <Image source={userHand[0].image ?? otherCards.cardBackDefault} style={styles.gps_card} />
               <Image source={opponentHand[0].image ?? otherCards.cardBackDefault} style={styles.gps_card} />
            </View>
            <View style={styles.gps_player_character}>
               <Image source={character.image} style={styles.gps_character} />
            </View>
         </View>
      </Background>
   );
};

export default GamePlayScreen;
