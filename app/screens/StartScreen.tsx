import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import React from 'react';

import { IScreenProps } from './IScreenProps';

const sky = require('../../assets/common/day_sky_background.png');
const cloud1 = require('../../assets/common/cloud_1.png');
const cloud2 = require('../../assets/common/cloud_2.png');
const ground = require('../../assets/common/ground_ss.png');
const tree = require('../../assets/common/tree.png');
const logo = require('../../assets/common/old_maid_logo.png');
const cow = require('../../assets/startScreen/cow_ss.png');
const maid = require('../../assets/startScreen/milk_maid_ss.png');
const startBtn = require('../../assets/startScreen/start_button.png');

const StartScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const btnLabel: string = 'Go to Character Select Screen';

	const handleStart = (): void => {
		navigation.navigate('CharSelect');
	};

	return (
		<ImageBackground source={sky} style={styles.background}>
			<View style={styles.container}>
				{/* <Button title={btnLabel} onPress={handleStart} /> */}
				<Image source={cloud1} style={[styles.cloud, styles.cloud1]} />
				<Image source={cloud2} style={[styles.cloud, styles.cloud2]} />
				<Image source={ground} style={styles.ground} />
				<View style={styles.treeContainer}>
					<Image source={tree} />
					<Image source={tree} style={styles.middleTree} />
					<Image source={tree} />
				</View>
				<Image source={cow} style={styles.cow} />
				<Image source={maid} style={styles.maid} />
				<Image source={logo} style={styles.logo} />
				<Image source={startBtn} style={styles.startBtn} />
			</View>
		</ImageBackground>
	);
};

export default StartScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	cloud: {
		position: 'absolute',
		resizeMode: 'contain',
		top: '5%',
		width: 200,
		height: 100,
	},
	cloud1: {
		left: '5%',
	},
	cloud2: {
		right: '5%',
	},
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	cow: {
		position: 'absolute',
		bottom: '30%',
		left: '5%',
	},
	ground: {
		alignSelf: 'center',
		bottom: 0,
		height: '50%',
		position: 'absolute',
		width: '100%',
	},
	logo: {
		position: 'absolute',
		top: '30%',
		zIndex: 10,
	},
	maid: {
		bottom: '29%',
		position: 'absolute',
		right: '8%',
	},
	middleTree: {
		marginHorizontal: '-25%',
		zIndex: 1,
		height: '65%',
		width: '80%',
	},
	startBtn: {
		bottom: '18%',
		position: 'absolute',
	},
	treeContainer: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		paddingBottom: 200,
	},
});
