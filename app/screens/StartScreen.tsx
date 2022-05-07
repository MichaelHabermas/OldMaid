import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const cloud1 = require('../../assets/common/cloud_1.png');
const cloud2 = require('../../assets/common/cloud_2.png');
const flower = require('../../assets/common/flower.png');
const ground = require('../../assets/common/ground_ss.png');
const cow = require('../../assets/startScreen/cow_ss.png');
const logo = require('../../assets/common/old_maid_logo.png');
const maid = require('../../assets/startScreen/milk_maid_ss.png');
const sky = require('../../assets/common/day_sky_background.png');
const startBtn = require('../../assets/startScreen/start_button.png');
const tree = require('../../assets/common/tree.png');

const StartScreen = ({ navigation }): JSX.Element => {
  const handleStart = (): void => {
    navigation.navigate('CharSelect');
  };

  return (
    <ImageBackground source={sky} style={styles.background}>
      <View style={styles.container}>
        <Image source={cloud1} style={[styles.cloud, styles.cloud1]} />
        <Image source={cloud2} style={[styles.cloud, styles.cloud2]} />
        <Image source={ground} style={styles.ground} />
        <View style={styles.treeContainer}>
          <Image source={tree} />
          <Image source={tree} style={styles.middleTree} />
          <Image source={tree} />
        </View>
        <Image source={cow} style={styles.cow} />
        <Image source={maid} style={styles.maid} />
        <Image source={logo} style={styles.logo} />
        <TouchableOpacity style={styles.startBtn} onPress={handleStart}>
          <Image source={startBtn} />
        </TouchableOpacity>
        <Image source={flower} style={styles.flower} />
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
    height: 100,
    position: 'absolute',
    resizeMode: 'contain',
    top: '5%',
    width: 200,
  },
  cloud1: {
    left: '5%',
  },
  cloud2: {
    right: '5%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  cow: {
    bottom: '30%',
    position: 'absolute',
    left: '5%',
  },
  flower: {
    position: 'absolute',
  },
  ground: {
    alignSelf: 'center',
    bottom: 0,
    height: '50%',
    position: 'absolute',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    top: '30%',
    zIndex: 10,
  },
  maid: {
    bottom: '29%',
    position: 'absolute',
    right: '8%',
  },
  middleTree: {
    height: '65%',
    marginHorizontal: '-25%',
    width: '80%',
    zIndex: 1,
  },
  startBtn: {
    bottom: '18%',
    position: 'absolute',
  },
  treeContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 200,
  },
});
