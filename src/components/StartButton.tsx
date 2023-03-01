import React from 'react';

interface StartButtonProps {
  text: string;
  onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default StartButton;
