import React, { useState } from 'react';

const LotteryDrawing = () => {
  const [result, setResult] = useState(null);
  const [drawing, setDrawing] = useState(false);

  const drawLottery = () => {
    setDrawing(true); // Start drawing animation
    setResult(null); // Reset previous result

    setTimeout(() => {
      const participants = ['Alice', 'Bob', 'Charlie', 'David'];
      const winner = participants[Math.floor(Math.random() * participants.length)];
      setResult(winner);
      setDrawing(false); // Stop drawing animation
    }, 1000); // Simulated drawing delay
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Lottery Drawing</h2>
      <button
        onClick={drawLottery}
        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        disabled={drawing} // Disable button while drawing
      >
        {drawing ? 'Drawing...' : 'Draw'}
      </button>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {drawing ? (
          <div className="animate-bounce text-4xl">🎟️</div> // Bouncing ticket effect while drawing
        ) : result && (
          <p className="text-2xl font-bold">
            🎉 Winner: {result}! 🎉
          </p>
        )}
      </div>
    </div>
  );
};

export default LotteryDrawing;