import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  speed = 100,
  delay = 1000,
  loop = false,
}) => {
  const [currentText, setCurrentText] = useState<string>(' ');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (direction === 'forward') {
        const nextIndex = (currentIndex + 1) % texts.length;
        const nextText = texts[nextIndex];
        setCurrentText(nextText.slice(0, currentText.length + 1));
        if (nextText.length === currentText.length + 1) {
          setCurrentIndex(nextIndex);
          setDirection('backward');
        }
      } else {
        setCurrentText(currentText.slice(0, currentText.length - 1));
        if (currentText.length === 1) {
          setDirection('forward');
        }
      }
    }, direction === 'forward' ? speed : speed / 2);

    return () => clearTimeout(timeoutId);
  }, [currentText, currentIndex, direction, speed, texts]);

  useEffect(() => {
    if (loop) {
      const timeoutId = setTimeout(() => {
        setDirection('forward');
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [delay, loop]);

  return <div>{currentText.split('\n').map((text, index) => <p key={index}>{text}</p>)}</div>;
};

export default TypingEffect;
