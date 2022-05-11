import { Image, TouchableOpacity } from 'react-native';
import React from 'react';

// components
import Background from '../components/Background';
import BackgroundTrees from '../components/BackgroundTrees';

// types
import { backgroundImage, IScreenProps } from './screenTypes';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const GameOverScreen = ({ navigation }: IScreenProps): JSX.Element => {
  const { gameOverScreen } = assets;

  const handleBtnPress = (): boolean => navigation.navigate('Start');

  return (
    <Background backgroundAsset={backgroundImage.eveningSky}>
      <BackgroundTrees />
      <Image style={styles.ss_logo} source={gameOverScreen.gameOverHeader} />
      {/* <Image source={gameOverScreen.cow} style={styles.ss_cow} /> */}
      {/* <Image source={flower} /> */}
      {/* <Image source={maid} /> */}
      {/* <Image source={bigStar} /> */}
      {/* <Image source={littleStar} /> */}
      {/* <Image source={win} /> */}
      <TouchableOpacity style={styles.g_signBtn} onPress={handleBtnPress}>
        <Image source={gameOverScreen.playAgainBtn} />
      </TouchableOpacity>
    </Background>
  );
};

export default GameOverScreen;
