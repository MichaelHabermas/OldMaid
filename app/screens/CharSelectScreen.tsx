import { Button, Text, View } from 'react-native';
import React from 'react';

import { useStyles } from '../styles/config/styles';

import { IScreenProps } from './IScreenProps';

import { assets } from '../../assets';
import Background from '../components/Background';

import { backgroundImage } from '../components/Background';

const CharSelectScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const styles = useStyles();

	const btnLabel: string = 'Go to Game Play Screen';

	const handleBtnPress = (): void => {
		navigation.navigate('GamePlay');
	};

	return (
		<Background backgroundAsset={backgroundImage.fullGrass}>
			<View style={styles.container}>
				<Text>Character Select Screen</Text>
				<Button title={btnLabel} onPress={handleBtnPress} />
			</View>
		</Background>
	);
};

export default CharSelectScreen;
