import { Image, ImageBackground } from 'react-native';
import React from 'react';

// components

// types
import { backgroundImage } from '../screens/screenTypes';
interface IBackgroundProps {
	children: React.ReactNode;
	backgroundAsset: backgroundImage;
}

// assets & styling
import { assets } from '../../assets';
import { styles } from '../styles';

const Background = ({
	children,
	backgroundAsset,
}: IBackgroundProps): JSX.Element => {
	const addGround: boolean = backgroundAsset !== backgroundImage.fullGrass;

	return (
		<ImageBackground
			source={assets.common[backgroundAsset]}
			style={styles.g_container}
		>
			{addGround && (
				<Image source={assets.common.halfGrass} style={styles.c_bg_ground} />
			)}
			{children}
		</ImageBackground>
	);
};

export default Background;
