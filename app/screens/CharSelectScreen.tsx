import { Button, Text } from 'react-native';
import React from 'react';

// components
import Background from '../components/Background';

// types
import { backgroundImage, IScreenProps } from './screenTypes';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const CharSelectScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const btnLabel: string = 'Go to Game Play Screen';

	const handleBtnPress = (): boolean => navigation.navigate('GamePlay');

	return (
		<Background backgroundAsset={backgroundImage.fullGrass}>
			<Text>Character Select Screen</Text>
			<Button title={btnLabel} onPress={handleBtnPress} />
		</Background>
	);
};

export default CharSelectScreen;
