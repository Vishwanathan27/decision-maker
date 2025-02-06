import React, { useState } from 'react';

const RandomCardDraw = () => {
  const [result, setResult] = useState(null);
  const [drawing, setDrawing] = useState(false);

  const suits = {
    'Hearts': '♥️',
    'Diamonds': '♦️',
    'Clubs': '♣️',
    'Spades': '♠️'
  };

  const drawCard = () => {
    setDrawing(true); // Start drawing animation
    setResult(null); // Reset previous result

    setTimeout(() => {
      const suitNames = Object.keys(suits);
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const randomSuit = suitNames[Math.floor(Math.random() * suitNames.length)];
      const randomValue = values[Math.floor(Math.random() * values.length)];
      setResult({ value: randomValue, suit: randomSuit });
      setDrawing(false); // Stop drawing animation
    }, 800); // Simulated drawing delay
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Draw a Random Card</h2>
      <button
        onClick={drawCard}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        disabled={drawing} // Disable button while drawing
      >
        {drawing ? 'Drawing...' : 'Draw Card'}
      </button>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {drawing ? (
          <div className="animate-pulse text-4xl">🃏</div> // Pulse effect while drawing
        ) : result && (
          <p className="text-2xl font-bold">
            {result.value} of {result.suit} {suits[result.suit]}
          </p>
        )}
      </div>
    </div>
  );
};

export default RandomCardDraw;