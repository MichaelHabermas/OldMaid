import { Button, Text, View } from 'react-native';
import React from 'react';

import { useStyles } from '../styles/config/styles';

import { IScreenProps } from './IScreenProps';

import { assets } from '../../assets';
import Background from '../components/Background';

import { backgroundImage } from '../components/Background';

const GamePlayScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const styles = useStyles();

	const btnLabel: string = 'Go to Game Over Screen';

	const handleBtnPress = (): void => {
		navigation.navigate('GameOver');
	};

	return (
		<Background backgroundAsset={backgroundImage.daySky}>
			<View style={styles.container}>
				<Text>Game Play Screen</Text>
				<Button title={btnLabel} onPress={handleBtnPress} />
			</View>
		</Background>
	);
};

export default GamePlayScreen;
