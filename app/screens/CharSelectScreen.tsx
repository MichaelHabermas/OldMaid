import { Image, TouchableOpacity } from "react-native";
import React from "react";

// components
import Background from "../components/Background";

// types
import { backgroundImage, IScreenProps } from "./screenTypes";

// assets & styling
import { assets } from "../../assets";
import { styles } from "../styles";

const CharSelectScreen = ({ navigation }: IScreenProps): JSX.Element => {
  const { charSelect, characters } = assets;

  const handleBtnPress = (): boolean => navigation.navigate("GamePlay");

  return (
    <Background backgroundAsset={backgroundImage.fullGrass}>
      <Image source={charSelect.charSelectHeader} style={styles.cs_header} />
      <Image source={charSelect.table} style={styles.table} />
      <Image source={charSelect.plate} style={styles.plate} />
      <Image source={charSelect.leftCupBtn} style={styles.leftCupBtn} />
      <Image source={charSelect.rightCupBtn} style={styles.rightCupBtn} />
      <TouchableOpacity style={styles.g_signBtn} onPress={handleBtnPress}>
        <Image source={charSelect.confirmBtn} />
      </TouchableOpacity>
      <Image source={characters.charactersArray[0]} />
    </Background>
  );
};

export default CharSelectScreen;
