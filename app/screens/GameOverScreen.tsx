import { Image, TouchableOpacity } from "react-native";
import React from "react";

// components
import Background from "../components/Background";
import BackgroundTrees from "../components/BackgroundTrees";

// types
import { backgroundImage, IScreenProps } from "./screenTypes";

// assets & styling
import { assets } from "../../assets";
import { styles } from "../styles";
import { common } from "../../assets/common";

const GameOverScreen = ({ navigation }: IScreenProps): JSX.Element => {
  const { gameOverScreen } = assets;

  const handleBtnPress = (): boolean => navigation.navigate("Start");

  return (
    <Background backgroundAsset={backgroundImage.eveningSky}>
      <Image
        source={gameOverScreen.bigStar}
        style={styles.gos_bigStar_center}
      />
      <Image
        source={gameOverScreen.littleStar}
        style={styles.gos_littleStar_center}
      />
      <Image source={gameOverScreen.bigStar} style={styles.gos_bigStar_right} />
      <Image
        source={gameOverScreen.littleStar}
        style={styles.gos_littleStar_right}
      />
      <Image source={gameOverScreen.bigStar} style={styles.gos_bigStar_left} />
      <Image
        source={gameOverScreen.littleStar}
        style={styles.gos_littleStar_left}
      />
      <Image
        source={gameOverScreen.bigStar}
        style={styles.gos_bigStar_middleL}
      />
      <Image
        source={gameOverScreen.littleStar}
        style={styles.gos_littleStar_middleL}
      />
      <Image
        source={gameOverScreen.bigStar}
        style={styles.gos_bigStar_middleR}
      />
      <Image
        source={gameOverScreen.littleStar}
        style={styles.gos_littleStar_middleR}
      />
      <Image
        source={gameOverScreen.bigStar}
        style={styles.gos_bigStar_middleL2}
      />
      <Image source={gameOverScreen.milkMaid} style={styles.gos_maid} />
      <Image source={gameOverScreen.cow} style={styles.gos_cow} />
      <BackgroundTrees />
      <Image style={styles.ss_logo} source={gameOverScreen.gameOverHeader} />

      <Image source={common.flower} style={styles.gos_bottomRight_flower} />
      <Image source={common.flower} style={styles.gos_topRight_flower} />
      <Image source={common.flower} style={styles.gos_topLeft_flower} />
      <Image source={common.flower} style={styles.gos_middle_flower} />
      <Image source={common.flower} style={styles.gos_bottomLeft_flower} />
      {/* <Image source={flower} /> */}
      {/* <Image source={win} /> */}
      <TouchableOpacity style={styles.g_signBtn} onPress={handleBtnPress}>
        <Image source={gameOverScreen.playAgainBtn} />
      </TouchableOpacity>
    </Background>
  );
};

export default GameOverScreen;
