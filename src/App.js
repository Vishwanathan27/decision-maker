import React, { useState, useEffect } from 'react';
import CoinFlip from './components/coinflip';
import DiceRoll from './components/diceroll';
import DrawingStraws from './components/drawingstraws';
import RandomNumber from './components/randomnumber';
import RockPaperScissors from './components/rockpaperscissor';
import SpinTheBottle from './components/spinthebottle';
import LotteryDrawing from './components/lottery';
import WheelOfFortune from './components/wheeloffortune';
import RandomCardDraw from './components/randomcard';

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' // Check stored theme preference
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen p-4 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center">Decision Maker App</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <CoinFlip />
        <DiceRoll />
        <DrawingStraws />
        <RandomNumber />
        <RockPaperScissors />
        <SpinTheBottle />
        <LotteryDrawing />
        <WheelOfFortune />
        <RandomCardDraw />
      </div>
    </div>
  );
};

export default App;