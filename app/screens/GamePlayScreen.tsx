import { Button, Text, Image, View } from 'react-native';
import React from 'react';

// components
import Background from '../components/Background';

// types
import { backgroundImage, IScreenProps } from './screenTypes';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const GamePlayScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const { gameCards, characters, common } = assets;
	const btnLabel: string = 'Go to Game Over Screen';

	const handleBtnPress = (): boolean => navigation.navigate('GameOver');

	return (
		<Background backgroundAsset={backgroundImage.fullGrass}>
			<Image
				source={common.optionsButton}
				style={styles.gps_options_button}
			/>
			{/* <Image
				source={characters.charactersArray[0]}
			/> */}
			<View style={styles.gps_card_container}>
				<Image
					source={gameCards.cardBack}
					style={styles.gps_card}
				/>
			</View>
			<View style={styles.gps_card_pile}>
				<View style={styles.gps_card_container}>
					<Image
						source={gameCards.cKing}
						style={styles.gps_card}
					/>
				</View>
				<View style={styles.gps_card_container}>
					<Image
						source={gameCards.cKing}
						style={styles.gps_card}
					/>
				</View>
			</View>
			<View style={styles.gps_card_container}>
				<Image
					source={gameCards.cQueen}
					style={styles.gps_card}
				/>
			</View>
			{/* <Image
				source={characters.charactersArray[15]}
			/> */}
			<Text>Game Play Screen</Text>
			<Button title={btnLabel} onPress={handleBtnPress} />
		</Background>
	);
};

export default GamePlayScreen;
