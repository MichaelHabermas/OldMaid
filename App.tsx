// libraries
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

// screens
import CharSelectScreen from "./app/screens/CharSelectScreen";
import GameOverScreen from "./app/screens/GameOverScreen";
import GamePlayScreen from "./app/screens/GamePlayScreen";
import StartScreen from "./app/screens/StartScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Start" component={StartScreen} />
    <Stack.Screen name="CharSelect" component={CharSelectScreen} />
    <Stack.Screen name="GamePlay" component={GamePlayScreen} />
    <Stack.Screen name="GameOver" component={GameOverScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
