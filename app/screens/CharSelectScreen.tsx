import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { IScreenProps } from './IScreenProps';

const CharSelectScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const btnLabel: string = 'Go to Game Play Screen';

	const handleBtnPress = (): void => {
		navigation.navigate('GamePlay');
	};

	return (
		<View style={styles.container}>
			<Text>Character Select Screen</Text>
			<Button title={btnLabel} onPress={handleBtnPress} />
		</View>
	);
};

export default CharSelectScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
