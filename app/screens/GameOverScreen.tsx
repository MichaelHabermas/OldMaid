import {
	StyleSheet,
	View,
	Image,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import React from 'react';

import { useStyles } from '../styles/config/styles';

import { IScreenProps } from './IScreenProps';
import BackgroundTrees from '../components/BackgroundTrees';

// const cow = require('../../assets/gameOverScreen/cow_gos.png');
// const flower = require('../../assets/gameOverScreen/flower_gos.png');
// const maid = require('../../assets/gameOverScreen/milk_maid_gos.png');
// const tree = require('../../assets/game/tree.png');
// const bigStar = require('../../assets/gameOverScreen/bigStar.png');
const gameOver = require('../../assets/gameOverScreen/game_over_message.png');
const ground = require('../../assets/common/grass_half.png');
// const littleStar = require('../../assets/gameOverScreen/littleStar.png');
const playAgainBtn = require('../../assets/gameOverScreen/play_again_button.png');
const sky = require('../../assets/common/sky_background_gos.png');
// const win = require('../../assets/gameOverScreen/win_message.png');

const GameOverScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const styles1 = useStyles();

	// const btnLabel: string = 'Go to Start Screen';

	const handleBtnPress = (): void => {
		navigation.navigate('Start');
	};

	return (
		<ImageBackground source={sky} style={styles.background}>
			<View style={styles1.container}>
				{/* <Text>Game Over Screen</Text> */}
				<Image source={ground} style={styles.ground} />
				{/* <Image source={cow} />  */}
				{/* <Image source={flower} /> */}
				{/* <Image source={maid} /> */}
				<BackgroundTrees />
				<Image source={gameOver} style={styles.gameOver} />
				{/* <Image source={bigStar} /> */}
				{/* <Image source={littleStar} /> */}
				{/* <Image source={playAgainBtn} style={styles.playAgainBtn} /> */}
				{/* <Image source={win} /> */}
				<TouchableOpacity style={styles.playAgainBtn} onPress={handleBtnPress}>
					<Image source={playAgainBtn} />
				</TouchableOpacity>
				{/* <Button title={btnLabel} onPress={handleBtnPress} /> */}
			</View>
		</ImageBackground>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: '100%',
	},
	ground: {
		bottom: 0,
		position: 'absolute',
	},
	gameOver: {},
	treemiddle: {},
	treeright: {},
	treeleft: {},
	playAgainBtn: {},
});
