import { StyleSheet } from 'react-native';

import { useTheme } from './themes';

import { components } from '../components';
import { global } from '../global';
import { startScreen, charSelectScreen } from '../screenStyles';

export const useStyles = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    ...components,
    ...global,
    ...startScreen,
    ...charSelectScreen,
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
