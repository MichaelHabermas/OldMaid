import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// I want this too

const GamePlayScreen: React.FC = ({ navigation }) => {
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
