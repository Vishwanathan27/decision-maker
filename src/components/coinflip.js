import React, { useState } from 'react';

const CoinFlip = () => {
  const [result, setResult] = useState(null);
  const [flipping, setFlipping] = useState(false);

  const flipCoin = () => {
    setFlipping(true); // Start flipping animation
    setResult(null); // Reset result during flip

    setTimeout(() => {
      const outcomes = ['Heads', 'Tails'];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setResult(randomOutcome);
      setFlipping(false); // Stop flipping
    }, 700); // Flip animation duration
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Flip the Coin</h2>
      <button
        onClick={flipCoin}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        disabled={flipping} // Disable button during flip
      >
        {flipping ? 'Flipping...' : 'Flip Coin'}
      </button>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {flipping ? (
          <div className="animate-spin text-4xl">🪙</div> // Spinning animation
        ) : result && (
          <p className="text-2xl font-bold">{result === 'Heads' ? '🪙 Heads' : '🪙 Tails'}</p>
        )}
      </div>
    </div>
  );
};

export default CoinFlip;