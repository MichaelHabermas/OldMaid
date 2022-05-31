// libraries
import React, { useContext, useEffect, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import GameContext from '../contexts/gameContext/gameContext';

// components
import Background from '../components/Background';

// helpers
import assetArrayBuilder from '../helpers/assetArrayBuilder';

// types, enums, & interfaces
import { backgroundImage, IScreenProps } from './screenTypes';
import { soundEffects } from '../contexts/gameContext/gameInterfaces';
import { IImageAsset } from '../contexts/gameContext/gameInterfaces';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const CharSelectScreen = ({ navigation }: IScreenProps): JSX.Element => {
   const { charSelect, characters } = assets;
   const { charPlates, playSound, handleSwitchPlate } = useContext(GameContext);

   const [characterChoices, setCharacterChoices] = useState<IImageAsset[]>([]);
   const [selectedCharacter, setSelectedCharacter] = useState<IImageAsset>();
   const [count, setCount] = useState<number>(0);
   const [randomOpponent, setRandomOpponent] = useState<IImageAsset>();

   useEffect(() => {
      setCharacterChoices(assetArrayBuilder(characters));
   }, []);

   useEffect(() => {
      setSelectedCharacter(characterChoices[count]);
      setRandomOpponent(characterChoices[Math.floor(Math.random() * characterChoices.length - 1)]);
   }, [characterChoices]);

   useEffect(() => {
      setSelectedCharacter(characterChoices[count]);
   }, [count]);

   const handleOptionsBtnPress = async (): Promise<void> => {
      await playSound(soundEffects.mainBtn).finally(() =>
         navigation.navigate('GamePlay', { character: selectedCharacter, opponent: randomOpponent }),
      );
   };

   const handleCharChange = (): void => {
      playSound(soundEffects.cupBtnSFX);
      count === characterChoices.length - 1 ? setCount(0) : setCount(count + 1);
   };

   return (
      <Background backgroundAsset={backgroundImage.picnicBackground}>
         <Image source={charSelect.charSelectHeader} style={styles.cs_header} />
         <Image source={charSelect.table} style={styles.table} />
         <Image source={charPlates.userPlate?.image} style={styles.plate} />

         <TouchableOpacity style={styles.leftCupBtn} onPress={handleSwitchPlate}>
            <Image source={charSelect.leftCupBtn} />
         </TouchableOpacity>

         <TouchableOpacity style={styles.rightCupBtn} onPress={handleCharChange}>
            <Image source={charSelect.rightCupBtn} />
         </TouchableOpacity>

         <TouchableOpacity style={styles.g_signBtn} onPress={handleOptionsBtnPress}>
            <Image source={charSelect.confirmBtn} />
         </TouchableOpacity>

         <Image source={selectedCharacter?.image || characters.boy1} />
      </Background>
   );
};

export default CharSelectScreen;
