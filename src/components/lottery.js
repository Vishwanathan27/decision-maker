// src/components/LotteryDrawing.js
import React, { useState } from 'react';

const LotteryDrawing = () => {
  const [result, setResult] = useState(null);

  const drawLottery = () => {
    const participants = ['Alice', 'Bob', 'Charlie', 'David'];
    const winner = participants[Math.floor(Math.random() * participants.length)];
    setResult(winner);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Lottery Drawing</h2>
      <button onClick={drawLottery} className="bg-teal-500 text-white px-4 py-2 rounded">
        Draw
      </button>
      {result && <p className="mt-2 text-lg">Winner: {result}</p>}
    </div>
  );
};

export default LotteryDrawing;
