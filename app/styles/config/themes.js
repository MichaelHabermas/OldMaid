import { palette } from './palette';

const defaultTheme = {
	color: {
		appBackground: palette.lightCyan,
		cardBackgroundPrimary: palette.mintCream,
		font: palette.gunmetal,
		shadow: palette.shadow,
		button: palette.bittersweet,
		button2: palette.naplesYellow,
		btnFont: palette.white,
	},
	spacing: {
		S: '1rem',
		M: '2rem',
		L: '4rem',
	},
	font: {
		primary: palette.lato,
		secondary: palette.poppins,
		size: {
			S: '1rem',
			M: '2rem',
			L: '4rem',
		},
	},
};

// this can be modified to include more themes in the future
export const useTheme = () => defaultTheme;
