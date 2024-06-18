// src/components/WheelOfFortune.js
import React, { useState } from 'react';

const WheelOfFortune = () => {
  const [result, setResult] = useState(null);

  const spinWheel = () => {
    const options = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4'];
    const randomOption = options[Math.floor(Math.random() * options.length)];
    setResult(randomOption);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Wheel of Fortune</h2>
      <button onClick={spinWheel} className="bg-pink-500 text-white px-4 py-2 rounded">
        Spin Wheel
      </button>
      {result && <p className="mt-2 text-lg">You got: {result}</p>}
    </div>
  );
};

export default WheelOfFortune;
