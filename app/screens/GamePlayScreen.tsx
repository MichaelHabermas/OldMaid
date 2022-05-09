import { Button, Text } from 'react-native';
import React from 'react';

// components
import Background from '../components/Background';

// types
import { backgroundImage, IScreenProps } from './screenTypes';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const GamePlayScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const btnLabel: string = 'Go to Game Over Screen';

	const handleBtnPress = (): boolean => navigation.navigate('GameOver');

	return (
		<Background backgroundAsset={backgroundImage.fullGrass}>
			<Text>Game Play Screen</Text>
			<Button title={btnLabel} onPress={handleBtnPress} />
		</Background>
	);
};

export default GamePlayScreen;
