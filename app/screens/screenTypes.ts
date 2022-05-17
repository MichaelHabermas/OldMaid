import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

export enum backgroundImage {
	daySky = 'daySky',
	eveningSky = 'eveningSky',
	fullGrass = 'fullGrass',
}

export interface IScreenProps {
	navigation: NavigationScreenProp<NavigationRoute<any>>;
	route: any;
}
