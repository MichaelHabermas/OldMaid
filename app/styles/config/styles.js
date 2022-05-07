import { StyleSheet } from "react-native";
import { useTheme } from "./themes";
import { global } from "../global";
import { components } from "../components";
export const useStyles = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    ...global,
    ...components,
    app: {
      alignItems: "center",
      backgroundColor: theme.color.appBackground,
      color: theme.color.font,
      flexDirection: "column",
      justifyContent: "center",
    },
  });
  return styles;
};
