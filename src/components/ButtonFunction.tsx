import React from 'react';

interface ButtonFunctionProps {
  text: string;
  onClick: () => void;
}

const ButtonFunction: React.FC<ButtonFunctionProps> = ({ text, onClick }) => {
  return (
    <button
      className=""
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonFunction;
