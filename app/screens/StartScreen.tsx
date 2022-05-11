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

const StartScreen = ({ navigation }: IScreenProps): JSX.Element => {
  const { common, startScreen } = assets;

  const handleStart = (): boolean => navigation.navigate('CharSelect');

  return (
    <Background backgroundAsset={backgroundImage.daySky}>
      <Image
        source={common.cloud1}
        style={[styles.ss_cloud, styles.ss_cloud1]}
      />
      <Image
        source={common.cloud2}
        style={[styles.ss_cloud, styles.ss_cloud2]}
      />
      <BackgroundTrees />
      <Image source={startScreen.cow} style={styles.ss_cow} />
      <Image source={startScreen.milkMaid} style={styles.ss_maid} />
      <Image source={common.OldMaidLogo} style={styles.ss_logo} />
      <TouchableOpacity style={styles.g_signBtn} onPress={handleStart}>
        <Image source={startScreen.startBtn} />
      </TouchableOpacity>
      <Image source={common.flower} style={styles.ss_topLeft_flower} />
      <Image source={common.flower} style={styles.ss_topRight_flower} />
      <Image source={common.flower} style={styles.ss_center_flower} />
      <Image source={common.flower} style={styles.ss_midRight_flower} />
      <Image source={common.flower} style={styles.ss_midLeft_flower} />
      <Image source={common.flower} style={styles.ss_bottLeft_flower} />
      <Image source={common.flower} style={styles.ss_bottRight_flower} />
    </Background>
  );
};

export default StartScreen;
