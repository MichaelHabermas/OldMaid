import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

export enum backgroundImage {
   daySky = 'daySky2',
   eveningSky = 'eveningBackground',
   fullGrass = 'fullGrass',
   nightSky = 'nightSky',
   picnicBackground = 'picnicBackground',
}

export interface IScreenProps {
   navigation: NavigationScreenProp<NavigationRoute<any>>;
   route: any;
}
