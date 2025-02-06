import React, { useState } from 'react';

const DrawingStraws = () => {
  const [result, setResult] = useState(null);
  const [drawing, setDrawing] = useState(false);

  const drawStraw = () => {
    setDrawing(true); // Start drawing animation
    setResult(null); // Reset previous result

    setTimeout(() => {
      const straws = ['Short', 'Medium', 'Long'];
      const randomStraw = straws[Math.floor(Math.random() * straws.length)];
      setResult(randomStraw);
      setDrawing(false); // Stop drawing animation
    }, 700); // Simulate drawing time
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Draw a Straw</h2>
      <button
        onClick={drawStraw}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        disabled={drawing} // Disable button while drawing
      >
        {drawing ? 'Drawing...' : 'Draw Straw'}
      </button>
      <div className="mt-4 text-lg font-medium text-gray-800">
        {drawing ? (
          <div className="animate-pulse text-4xl">🥢</div> // Pulse effect while drawing
        ) : result && (
          <p className="text-2xl font-bold">
            You drew a {result} straw {result === 'Short' ? '🥢' : result === 'Medium' ? '🥢🥢' : '🥢🥢🥢'}
          </p>
        )}
      </div>
    </div>
  );
};

export default DrawingStraws;