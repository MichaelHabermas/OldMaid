import { ImageBackground, Image } from 'react-native';
import React from 'react';

import { useStyles } from '../styles/config/styles';
import { assets } from '../../assets';

export enum backgroundImage {
	daySky = 'daySky',
	eveningSky = 'eveningSky',
	fullGrass = 'fullGrass',
}

interface IBackgroundProps {
	children: React.ReactNode;
	backgroundAsset: backgroundImage;
}

const Background = ({
	children,
	backgroundAsset,
}: IBackgroundProps): JSX.Element => {
	const styles = useStyles();
	const addGround: boolean = backgroundAsset !== backgroundImage.fullGrass;

	return (
		<ImageBackground
			source={assets.common[backgroundAsset]}
			style={styles.container}
		>
			{addGround && (
				<Image source={assets.common.halfGrass} style={styles.ground} />
			)}
			{children}
		</ImageBackground>
	);
};

export default Background;
