// src/components/RandomNumber.js
import React, { useState } from 'react';

const RandomNumber = () => {
  const [result, setResult] = useState(null);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setResult(randomNumber);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Random Number Generator</h2>
      <button onClick={generateRandomNumber} className="bg-red-500 text-white px-4 py-2 rounded">
        Generate Number
      </button>
      {result && <p className="mt-2 text-lg">Generated Number: {result}</p>}
    </div>
  );
};

export default RandomNumber;
