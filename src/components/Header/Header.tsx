
import { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const greetingOptions = [
    "Hi!",
    "Hola!",
    "Selamat Datang!",
    "你好!",
    "안녕하세요!",
    "こんにちは!"
  ];
  
  const constantGreeting = "I'm Michaela";
  const [typedGreeting, setTypedGreeting] = useState("");
  const [optionIndex, setOptionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < greetingOptions[optionIndex].length) {
        setTypedGreeting(prevGreeting => prevGreeting + greetingOptions[optionIndex][charIndex]);
        setCharIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedGreeting("");
          setCharIndex(0);
          setOptionIndex(prevIndex => (prevIndex + 1) % greetingOptions.length);
        }, 1000); 
      }
    }, 100); 

    return () => clearInterval(typingInterval);
  }, [charIndex, optionIndex]);

 
  return (
    <div className="header">
      <h3 className='header__greeting'>{typedGreeting} {constantGreeting}</h3>
      <h1 className="header__title">A Junior Software Developer Based In London, UK</h1>
    </div>
  );
};

export default Header;

