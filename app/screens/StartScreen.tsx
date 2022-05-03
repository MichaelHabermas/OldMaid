import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const StartScreen: React.FC = ({ navigation }) => {
	const btnLabel: string = 'Go to Character Select Screen';

	const handleStart = (): void => {
		navigation.navigate('CharSelect');
	};

	return (
		<View style={styles.container}>
			<Text>Start Screen</Text>
			<Button title={btnLabel} onPress={handleStart} />
		</View>
	);
};

export default StartScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
