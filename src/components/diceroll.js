// src/components/DiceRoll.js
import React, { useState } from 'react';

const DiceRoll = () => {
  const [result, setResult] = useState(null);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setResult(randomNumber);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Dice Roll</h2>
      <button onClick={rollDice} className="bg-green-500 text-white px-4 py-2 rounded">
        Roll Dice
      </button>
      {result && <p className="mt-2 text-lg">You rolled a {result}</p>}
    </div>
  );
};

export default DiceRoll;
