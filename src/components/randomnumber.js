import React, { useState } from 'react';

const RandomNumber = () => {
  const [result, setResult] = useState(null);
  const [generating, setGenerating] = useState(false);

  const generateRandomNumber = () => {
    setGenerating(true); // Start generating animation
    setResult(null); // Reset previous result

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      setResult(randomNumber);
      setGenerating(false); // Stop generating animation
    }, 800); // Simulated delay for a better effect
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Random Number Generator</h2>
      <button
        onClick={generateRandomNumber}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        disabled={generating} // Disable button while generating
      >
        {generating ? 'Generating...' : 'Generate Number'}
      </button>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {generating ? (
          <div className="animate-spin text-4xl">🔢</div> // Spinning effect while generating
        ) : result && (
          <p className="text-2xl font-bold">
            🎲 Generated Number: {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default RandomNumber;