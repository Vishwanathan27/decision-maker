// src/components/DrawingStraws.js
import React, { useState } from 'react';

const DrawingStraws = () => {
  const [result, setResult] = useState(null);

  const drawStraw = () => {
    const straws = ['Short', 'Medium', 'Long'];
    const randomStraw = straws[Math.floor(Math.random() * straws.length)];
    setResult(randomStraw);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Drawing Straws</h2>
      <button onClick={drawStraw} className="bg-yellow-500 text-white px-4 py-2 rounded">
        Draw Straw
      </button>
      {result && <p className="mt-2 text-lg">You drew a {result} straw</p>}
    </div>
  );
};

export default DrawingStraws;
