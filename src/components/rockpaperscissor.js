// src/components/RockPaperScissors.js
import React, { useState } from 'react';

const RockPaperScissors = () => {
  const [result, setResult] = useState(null);

  const playGame = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setResult(randomChoice);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Rock-Paper-Scissors</h2>
      <button onClick={playGame} className="bg-purple-500 text-white px-4 py-2 rounded">
        Play
      </button>
      {result && <p className="mt-2 text-lg">You got: {result}</p>}
    </div>
  );
};

export default RockPaperScissors;
