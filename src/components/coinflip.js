// src/components/CoinFlip.js
import React, { useState } from 'react';

const CoinFlip = () => {
  const [result, setResult] = useState(null);

  const flipCoin = () => {
    const outcomes = ['Heads', 'Tails'];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    setResult(randomOutcome);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Coin Flip</h2>
      <button onClick={flipCoin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Flip Coin
      </button>
      {result && <p className="mt-2 text-lg">{result}</p>}
    </div>
  );
};

export default CoinFlip;
