import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartScreen from './components/StartScreen';
import GameBoard from './components/GameBoard';
import EndScreen from './components/EndScreen';
import AppNavbar from './components/Navbar';

function App() {
  const [screen, setScreen] = useState('start'); // start, game, end
  const [theme, setTheme] = useState('');
  const [level, setLevel] = useState('');
  const [moves, setMoves] = useState(0);

  const handleStart = (chosenTheme, chosenLevel) => {
    setTheme(chosenTheme);
    setLevel(chosenLevel);
    setMoves(0);
    setScreen('game');
  };

  const handleGameOver = (totalMoves) => {
    setMoves(totalMoves);
    setScreen('end');
  };

  const handleRestart = () => {
    setTheme('');
    setLevel('');
    setMoves(0);
    setScreen('start');
  };

  return (
    <>
      <AppNavbar screen={screen} />
      <div className="App">
        {screen === 'start' && <StartScreen onStart={handleStart} />}

        {screen === 'game' && (
          <GameBoard
            theme={theme}
            level={level}
            onGameOver={handleGameOver}
            onBack={() => setScreen('start')} 
          />
        )}

        {screen === 'end' && (
          <EndScreen
            theme={theme}
            level={level}
            moves={moves}
            onRestart={handleRestart}
          />
        )}
      </div>
    </>
  );
}

export default App;
