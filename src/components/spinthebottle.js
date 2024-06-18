// src/components/SpinTheBottle.js
import React, { useState } from 'react';

const SpinTheBottle = () => {
  const [result, setResult] = useState(null);

  const spinBottle = () => {
    const choices = ['Person 1', 'Person 2', 'Person 3', 'Person 4'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setResult(randomChoice);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Spin the Bottle</h2>
      <button onClick={spinBottle} className="bg-orange-500 text-white px-4 py-2 rounded">
        Spin
      </button>
      {result && <p className="mt-2 text-lg">Bottle points to: {result}</p>}
    </div>
  );
};

export default SpinTheBottle;
