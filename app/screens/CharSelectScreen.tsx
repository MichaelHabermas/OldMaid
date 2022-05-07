import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

//new change

interface IProps {
	navigation: any
}


const CharSelectScreen = ({ navigation }: IProps): JSX.Element => {
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
