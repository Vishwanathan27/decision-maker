// src/App.js
import React from 'react';
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
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Decision Maker App</h1>
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
