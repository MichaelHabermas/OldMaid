import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// I want this
type IProps = {
	navigation: any;
};

const GameOverScreen = ({ navigation }): JSX.Element => {
	const btnLabel: string = 'Go to Start Screen';

	const handleBtnPress = (): void => {
		navigation.navigate('Start');
	};

	return (
		<View style={styles.container}>
			<Text>Game Over Screen</Text>
			<Button title={btnLabel} onPress={handleBtnPress} />
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
