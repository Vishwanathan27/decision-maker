// src/components/RandomCardDraw.js
import React, { useState } from 'react';

const RandomCardDraw = () => {
  const [result, setResult] = useState(null);

  const drawCard = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    setResult(`${randomValue} of ${randomSuit}`);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Random Card Draw</h2>
      <button onClick={drawCard} className="bg-cyan-500 text-white px-4 py-2 rounded">
        Draw Card
      </button>
      {result && <p className="mt-2 text-lg">{result}</p>}
    </div>
  );
};

export default RandomCardDraw;
