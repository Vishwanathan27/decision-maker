import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DiceRoll = () => {
  const [result, setResult] = useState(null);
  const diceEmojis = ["", "🎲", "🎲", "🎲", "🎲", "🎲", "🎲"];

  const rollDice = () => {
    setResult(null); // Reset for a slight delay effect
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setResult(randomNumber);
    }, 200); // Adds a small delay before showing the new result
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Roll the Dice</h2>
      <button
        onClick={rollDice}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      >
        Roll Dice
      </button>
      {result !== null && (
        <motion.p 
          key={result}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-lg font-medium text-gray-800"
        >
          You rolled a <span className="text-2xl font-bold">{result}</span> {diceEmojis[result]}
        </motion.p>
      )}
    </div>
  );
};

export default DiceRoll;