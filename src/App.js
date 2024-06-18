// App.js

import React, { useEffect, useState } from 'react';
import CalculatorCarousel from './components/CalculatorCarousel';
import './styles/App.css';

function getRandomPosition() {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  return { top: `${top}%`, left: `${left}%` };
}

function App() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const bubbleCount = 10; // Number of bubbles
    const newBubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push(getRandomPosition());
    }
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="App">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`bubble bubble${(index % 4) + 1}`}
          style={{ top: bubble.top, left: bubble.left }}
        />
      ))}
      <CalculatorCarousel />
    </div>
  );
}

export default App;
