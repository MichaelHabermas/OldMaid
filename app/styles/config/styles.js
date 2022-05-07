import { StyleSheet } from 'react-native';
import { useTheme } from './themes';
import { global } from '../global';

export const useStyles = () => {
	const theme = useTheme();

	const styles = StyleSheet.create({
		...global,
		app: {
			alignItems: 'center',
			backgroundColor: theme.color.appBackground,
			color: theme.color.font,
			flexDirection: 'column',
			justifyContent: 'center',
		},
	});
	return styles;
};
