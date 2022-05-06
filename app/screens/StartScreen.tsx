import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

const sky = require('../../assets/common/day_sky_background.png');
const cloud1 = require('../../assets/common/cloud_1.png');
const cloud2 = require('../../assets/common/cloud_2.png');
const ground = require('../../assets/common/ground_ss.png');
const tree = require('../../assets/common/tree.png');
const logo = require('../../assets/common/old_maid_logo.png');
const cow = require('../../assets/startScreen/cow_ss.png');
const maid = require('../../assets/startScreen/milk_maid_ss.png');
const startBtn = require('../../assets/startScreen/start_button.png');

const StartScreen: React.FC = ({ navigation }) => {
  const btnLabel: string = 'Go to Character Select Screen';

  const handleStart = (): void => {
    navigation.navigate('CharSelect');
  };

  return (
    <ImageBackground source={sky} style={styles.background}>
      <View style={styles.container}>
        {/* <Text>Start Screen</Text>
        <Button title={btnLabel} onPress={handleStart} /> */}
        <Image source={ground} style={styles.ground} />
        <Image source={cloud1} style={[styles.cloud, styles.cloud1]} />
        <Image source={cloud2} style={[styles.cloud, styles.cloud2]} />
        {/* <Image source={cow} />
        <Image source={maid} />
        <Image source={startBtn} />
        <Image source={tree} />
        <Image source={tree} />
        <Image source={logo} /> */}
      </View>
    </ImageBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  cloud: {
    position: 'absolute',
    resizeMode: 'contain',
    top: '5%',
    width: 200,
    height: 100,
  },
  cloud1: {
    left: '5%',
  },
  cloud2: {
    right: '5%',
  },
  container: {
    flex: 1,
  },
  ground: {
    alignSelf: 'center',
    bottom: 0,
    height: '50%',
    position: 'absolute',
    width: '100%',
  },
});
