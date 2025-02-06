import React, { useState } from 'react';

const RockPaperScissors = () => {
  const [result, setResult] = useState(null);
  const [playing, setPlaying] = useState(false);

  const choices = {
    'Rock': '✊',
    'Paper': '✋',
    'Scissors': '✌️'
  };

  const playGame = () => {
    setPlaying(true); // Start playing animation
    setResult(null); // Reset previous result

    setTimeout(() => {
      const choiceKeys = Object.keys(choices);
      const randomChoice = choiceKeys[Math.floor(Math.random() * choiceKeys.length)];
      setResult(randomChoice);
      setPlaying(false); // Stop playing animation
    }, 800); // Simulated selection delay
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Rock-Paper-Scissors</h2>
      <button
        onClick={playGame}
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        disabled={playing} // Disable button while playing
      >
        {playing ? 'Playing...' : 'Play'}
      </button>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {playing ? (
          <div className="animate-pulse text-4xl">🎮</div> // Pulse effect while playing
        ) : result && (
          <p className="text-2xl font-bold">
            You got: {choices[result]} {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default RockPaperScissors;