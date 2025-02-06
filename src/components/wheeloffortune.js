import React, { useState } from 'react';

const WheelOfFortune = () => {
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    setSpinning(true); // Start spinning animation
    setResult(null); // Reset previous result

    setTimeout(() => {
      const options = ['🎁 Prize 1', '🎉 Prize 2', '🏆 Prize 3', '💰 Prize 4'];
      const randomOption = options[Math.floor(Math.random() * options.length)];
      setResult(randomOption);
      setSpinning(false); // Stop spinning animation
    }, 1000); // Simulated spin delay
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Wheel of Fortune</h2>
      <button
        onClick={spinWheel}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        disabled={spinning} // Disable button while spinning
      >
        {spinning ? 'Spinning...' : 'Spin Wheel'}
      </button>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {spinning ? (
          <div className="animate-spin text-4xl">🎡</div> // Spinning wheel effect
        ) : result && (
          <p className="text-2xl font-bold">
            You got: {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default WheelOfFortune;