import { Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import assetArrayBuilder, { IAsset } from '../helpers/assetArrayBuilder';

// components
import Background from '../components/Background';

// types
import { backgroundImage, IScreenProps } from './screenTypes';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const CharSelectScreen = ({ navigation }: IScreenProps): JSX.Element => {
   const { charSelect, characters } = assets;
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

   const handleBtnPress = (): boolean =>
      navigation.navigate('GamePlay', { character: selectedCharacter, opponent: randomOpponent });

   const handleCharChangeRight = (): void => {
      if (count === characterChoices.length - 1) {
         setCount(0);
      } else setCount(count + 1);
   };

   const handleCharChangeLeft = (): void => {
      if (count === 0) {
         setCount(characterChoices.length - 1);
      } else setCount(count - 1);
   };

   return (
      <Background backgroundAsset={backgroundImage.picnicBackground}>
         <Image source={charSelect.charSelectHeader} style={styles.cs_header} />
         <Image source={charSelect.table} style={styles.table} />
         <Image source={charSelect.plate} style={styles.plate} />
         <TouchableOpacity style={styles.leftCupBtn} onPress={handleCharChangeLeft}>
            <Image source={charSelect.leftCupBtn} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.rightCupBtn} onPress={handleCharChangeRight}>
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
