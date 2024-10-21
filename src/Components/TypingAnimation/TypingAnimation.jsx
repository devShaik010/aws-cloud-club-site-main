import React, { useEffect, useState } from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  const messages = [
    "Be a part of the cloud revolution now",
    "Be a part of the cloud revolution now",
    "Be a part of the cloud revolution now",
    "Be a part of the cloud revolution now" 
    
  ];

  const [displayText, setDisplayText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayText((prev) => prev + currentMessage.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText('');
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }, 1500); // Pause before the next message
      }
    }, 150); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentMessageIndex]);

  return (
    <div className="typing-animation">
      <h1>{displayText}</h1>
    </div>
  );
};

export default TypingAnimation;
