// libraries
import React, { useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import GameContext from '../contexts/gameContext/gameContext';

// components
import Background from '../components/Background';
import BackgroundTrees from '../components/BackgroundTrees';

// types, enums, & interfaces
import { backgroundImage, IScreenProps } from './screenTypes';
import { soundEffects } from '../contexts/gameContext/gameInterfaces';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const GameOverScreen = ({ navigation }: IScreenProps): JSX.Element => {
   const { common, gameOverScreen } = assets;
   const { playSound } = useContext(GameContext);

   const handleBtnPress = async (): Promise<void> => {
      await playSound(soundEffects.mainBtn).finally(() => navigation.navigate('Start'));
   };

   return (
      <Background backgroundAsset={backgroundImage.nightSky}>
         <Image source={gameOverScreen.stars} style={styles.gos_stars} />

         <Image source={gameOverScreen.milkMaid} style={styles.gos_maid} />
         <Image source={gameOverScreen.cow} style={styles.gos_cow} />
         <BackgroundTrees />
         <Image style={styles.ss_logo} source={gameOverScreen.gameOverHeader} />

         <Image source={common.flower} style={styles.gos_bottomRight_flower} />
         <Image source={common.flower} style={styles.gos_topRight_flower} />
         <Image source={common.flower} style={styles.gos_topLeft_flower} />
         <Image source={common.flower} style={styles.gos_middle_flower} />
         <Image source={common.flower} style={styles.gos_bottomLeft_flower} />
         <Image source={gameOverScreen.winMessage} style={styles.gos_winMessage} />
         <TouchableOpacity style={styles.g_signBtn} onPress={handleBtnPress}>
            <Image source={gameOverScreen.playAgainBtn} />
         </TouchableOpacity>
      </Background>
   );
};

// export default GameOverScreen;
export default GameOverScreen;
