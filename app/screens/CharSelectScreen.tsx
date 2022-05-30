// libraries
import React, { useContext, useEffect, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import assetArrayBuilder, { IAsset } from '../helpers/assetArrayBuilder';
import GameContext from '../contexts/gameContext/gameContext';

// components
import Background from '../components/Background';

// types, enums, & interfaces
import { backgroundImage, IScreenProps } from './screenTypes';
import { soundEffects } from '../contexts/gameContext/gameInterfaces';
type directions = 'LEFT' | 'RIGHT';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const CharSelectScreen = ({ navigation }: IScreenProps): JSX.Element => {
   const { charSelect, characters } = assets;
   const { playSound } = useContext(GameContext);

   const [characterChoices, setCharacterChoices] = useState<IAsset[]>([]);
   const [selectedCharacter, setSelectedCharacter] = useState<IAsset>();
   const [count, setCount] = useState<number>(0);
   const [randomOpponent, setRandomOpponent] = useState<IAsset>();

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

   const handleBtnPress = async (): Promise<void> => {
      await playSound(soundEffects.mainBtn).finally(() =>
         navigation.navigate('GamePlay', { character: selectedCharacter, opponent: randomOpponent }),
      );
   };

   const handleCharChange = (direction: directions): void => {
      playSound(soundEffects.cupBtnSFX);

      if (direction === 'RIGHT') {
         count === characterChoices.length - 1 ? setCount(0) : setCount(count + 1);
      } else {
         count === 0 ? setCount(characterChoices.length - 1) : setCount(count - 1);
      }
   };

   return (
      <Background backgroundAsset={backgroundImage.picnicBackground}>
         <Image source={charSelect.charSelectHeader} style={styles.cs_header} />
         <Image source={charSelect.table} style={styles.table} />
         <Image source={charSelect.plate} style={styles.plate} />
         <TouchableOpacity style={styles.leftCupBtn} onPress={() => handleCharChange('LEFT')}>
            <Image source={charSelect.leftCupBtn} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.rightCupBtn} onPress={() => handleCharChange('RIGHT')}>
            <Image source={charSelect.rightCupBtn} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.g_signBtn} onPress={handleBtnPress}>
            <Image source={charSelect.confirmBtn} />
         </TouchableOpacity>
         <Image source={selectedCharacter?.image} />
      </Background>
   );
};

export default CharSelectScreen;
