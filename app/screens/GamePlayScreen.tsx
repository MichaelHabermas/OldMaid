import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { IScreenProps } from './IScreenProps';

const GamePlayScreen = ({ navigation }: IScreenProps): JSX.Element => {
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
