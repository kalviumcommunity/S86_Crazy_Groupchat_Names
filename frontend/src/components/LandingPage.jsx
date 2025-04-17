import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
  const navigate = useNavigate();

  // Navigate to the Group Manager page
  const goToManager = () => {
    navigate('/group-manager');
  };

  // Navigate to the Random Name Generator page
  const goToRandomNameGenerator = () => {
    navigate('/random-name-generator');
  };

  const features = [
    '🔤 Generate names based on categories or keywords',
    '✨ Random name generator for instant creativity',
    '⭐ Save your favorite names for later',
    '📤 Share names with friends easily',
  ];

  return (
    <div className="min-h-screen bg-green-300 text-black flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Crazy Group Chat Names 🎉</h1>
      <p className="text-lg text-center max-w-xl mb-10">
        Welcome to a fun and interactive app that helps you create the wackiest, coolest, and most creative names for your group chats!
      </p>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-3xl mb-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-blue-700 p-5 rounded-2xl shadow-lg font-medium transition hover:scale-105"
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Existing Manage Group Names Button */}
      <button
        onClick={goToManager}
        className="mt-4 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
      >
        Manage Group Names
      </button>

      {/* New Random Name Generator Button */}
      <button
        onClick={goToRandomNameGenerator}
        className="mt-4 bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition"
      >
        Generate Random Name
      </button>
    </div>
  );
};

export default LandingPage;
