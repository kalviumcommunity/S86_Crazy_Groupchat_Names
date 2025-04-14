import React from 'react';
import '../App.css';

const LandingPage = () => {
  const features = [
    '🔤 Generate names based on categories or keywords',
    '✨ Random name generator for instant creativity',
    '⭐ Save your favorite names for later',
    '📤 Share names with friends easily',
  ];

  return (
    <div className="min-h-screen bg-red-300 text-white flex flex-col justify-center items-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">🎉 Crazy Group Chat Names</h1>
      <p className="text-lg text-center max-w-xl mb-10">
        Welcome to a fun and interactive app that helps you create the wackiest, coolest, and most creative names for your group chats!
      </p>

      <div className="grid gap-6 md:grid-cols-2 w-full max-w-3xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-blue-700 p-5 rounded-2xl shadow-lg font-medium transition hover:scale-105"
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
