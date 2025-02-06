import React, { useState } from 'react';

const SpinTheBottle = () => {
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinBottle = () => {
    setSpinning(true); // Start spinning animation
    setResult(null); // Reset previous result

    setTimeout(() => {
      const choices = ['🎭 Person 1', '🎉 Person 2', '😃 Person 3', '🥳 Person 4'];
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setResult(randomChoice);
      setSpinning(false); // Stop spinning animation
    }, 1000); // Simulated spin delay
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Spin the Bottle</h2>
      <button
        onClick={spinBottle}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        disabled={spinning} // Disable button while spinning
      >
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {spinning ? (
          <div className="animate-spin text-4xl">🍾</div> // Spinning bottle effect
        ) : result && (
          <p className="text-2xl font-bold">
            Bottle points to: {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default SpinTheBottle;