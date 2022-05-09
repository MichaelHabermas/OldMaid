import { Image, TouchableOpacity } from 'react-native';
import React from 'react';

// components
import Background from '../components/Background';
import BackgroundTrees from '../components/BackgroundTrees';

// types
import { backgroundImage, IScreenProps } from './screenTypes';

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const StartScreen = ({ navigation }: IScreenProps): JSX.Element => {
	const { common, startScreen } = assets;

	const handleStart = (): boolean => navigation.navigate('CharSelect');

	return (
		<Background backgroundAsset={backgroundImage.daySky}>
			<Image source={common.cloud1} style={[styles.cloud, styles.cloud1]} />
			<Image source={common.cloud2} style={[styles.cloud, styles.cloud2]} />
			<BackgroundTrees />
			<Image source={startScreen.cow} style={styles.cow} />
			<Image source={startScreen.milkMaid} style={styles.maid} />
			<Image source={common.OldMaidLogo} style={styles.logo} />
			<TouchableOpacity style={styles.startBtn} onPress={handleStart}>
				<Image source={startScreen.startBtn} />
			</TouchableOpacity>
			<Image source={common.flower} style={styles.flower} />
		</Background>
	);
};

export default StartScreen;
