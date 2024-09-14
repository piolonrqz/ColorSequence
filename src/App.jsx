import { useState, useEffect } from 'react';
import './App.css';
import OuterGrid from './Components/OuterGrid';
import UpperGrid from './Components/UpperGrid';

const correctSequence = [
  '#FF7F50', // Coral (Summer)
  '#FFD700', // Gold (Summer)
  '#FF4500', // Orange Red (Autumn)
  '#8B4513', // Saddle Brown (Autumn)
  '#FF6347', // Tomato (Summer)
  '#CD853F', // Peru (Autumn)
  '#FFA07A', // Light Salmon (Summer)
  '#D2691E', // Chocolate (Autumn)
  '#FF8C00'  // Dark Orange (Autumn)
];

function App() {
  const [shuffledColors, setShuffledColors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedColors, setRevealedColors] = useState(Array(9).fill('#FFF5E1'));
  const [reset, setReset] = useState(false);

  useEffect(() => {
    shuffleColors();
  }, []);

  const shuffleColors = () => {
    const shuffled = [...correctSequence].sort(() => Math.random() - 0.5);
    setShuffledColors(shuffled);
    resetGame();
  };

  const resetGame = () => {
    setRevealedColors(Array(9).fill('#FFF5E1'));
    setCurrentIndex(0);
  };

  const handleCardClick = (color, index) => {
    if (color === correctSequence[currentIndex]) {
      const newRevealedColors = [...revealedColors];
      newRevealedColors[index] = color; // Reveal the correct color
      setRevealedColors(newRevealedColors);

      if (currentIndex === correctSequence.length - 1) {
        shuffleColors(); // Shuffle cards when you win the game
        alert('Great Job.'); 
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      setReset(true);
      resetGame();
    }
  };

  return (
    <>
      <div>
        <br />
        <UpperGrid correctSequence={correctSequence} />
        <br />
        <div>
          <OuterGrid 
            shuffledColors={shuffledColors} 
            onCardClick={handleCardClick} 
            reset={reset} 
            revealedColors={revealedColors} // Pass revealed colors to OuterGrid
          />
        </div>
      </div>
    </>
  );
}

export default App;
