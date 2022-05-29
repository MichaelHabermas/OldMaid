import { TypedNavigator, ParamListBase, StackNavigationState } from '@react-navigation/native';
import {
   createNativeStackNavigator,
   NativeStackNavigationOptions,
   NativeStackNavigationEventMap,
} from '@react-navigation/native-stack';
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types';

// screens
import CharSelectScreen from '../screens/CharSelectScreen';
import GameOverScreen from '../screens/GameOverScreen';
import GamePlayScreen from '../screens/GamePlayScreen';
import StartScreen from '../screens/startScreen';

const Navigator = (): JSX.Element => {
   const Stack: TypedNavigator<
      ParamListBase,
      StackNavigationState<ParamListBase>,
      NativeStackNavigationOptions,
      NativeStackNavigationEventMap,
      ({
         id,
         initialRouteName,
         children,
         screenListeners,
         screenOptions,
         ...rest
      }: NativeStackNavigatorProps) => JSX.Element
   > = createNativeStackNavigator();

   const StackNavigator = (): JSX.Element => (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name='Start' component={StartScreen} />
         <Stack.Screen name='CharSelect' component={CharSelectScreen} />
         <Stack.Screen name='GamePlay' component={GamePlayScreen} />
         <Stack.Screen name='GameOver' component={GameOverScreen} />
      </Stack.Navigator>
   );

   return <StackNavigator />;
};

export default Navigator;
