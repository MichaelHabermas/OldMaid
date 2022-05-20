import Navigator from './app/navigation/Navigator';
import { GameStateProvider } from './app/context/gameState';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <GameStateProvider>
        <Navigator />
      </GameStateProvider>
    </NavigationContainer>
  );
};

export default App;
