import React, { useState } from 'react';

const RandomNameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('');

  // Arrays of adjectives, nouns, and emojis
  const adjectives = ['Spicy', 'Witty', 'Crazy', 'Sneaky', 'Gossippinng', 'Loyal', 'Wild', 'Funky'];
  const nouns = ['Ninjas', 'Penguins', 'Squad', 'Pumpkins', 'Unicorns', 'Rockets', 'Pandas', 'Stars'];
  const emojis = ['🔥', '😂', '👑', '🤘', '🌈', '💥', '✨'];



  // Function to generate a random name
  const generateRandomName = () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Generate the name by combining the random elements
    const randomName = `${randomEmoji} ${randomAdjective} ${randomNoun}`;
    setGeneratedName(randomName); // Update the state with the generated name
  };

  return (
    <div className="min-h-screen bg-blue-100 text-black flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Random Chat Name Generator</h1>
      <p className="text-lg text-center max-w-xl mb-10">
        Generates a unique and fun name for your group chat instantly!
      </p>

      {/* Button to trigger name generation */}
      <button
        onClick={generateRandomName}
        className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition mb-4"
      >
        Generates Random Name
      </button>

      {/* Display the generated name */}
      {generatedName && (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Generated Name:</h2>
          <p className="text-xl mt-2">{generatedName}</p>
        </div>
      )}
    </div>
  );
};

export default RandomNameGenerator;
