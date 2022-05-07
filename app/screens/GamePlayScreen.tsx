import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useStyles } from '../styles/config/styles';

import { IScreenProps } from './IScreenProps';

const GamePlayScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const styles = useStyles();

	const btnLabel: string = 'Go to Game Over Screen';

	const handleBtnPress = (): void => {
		navigation.navigate('GameOver');
	};

	return (
		<View style={styles.container}>
			<Text>Game Play Screen</Text>
			<Button title={btnLabel} onPress={handleBtnPress} />
		</View>
	);
};

export default GamePlayScreen;
