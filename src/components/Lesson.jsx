import { useState } from 'react';

function Lesson() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  // Static sample data (to be replaced with API data in Phase 2)
  const cards = [
    { front: 'Hello', back: 'Hola' },
    { front: 'Thank you', back: 'Gracias' },
    { front: 'Good morning', back: 'Buenos días' },
  ];

  const handleFlip = () => setIsFlipped(!isFlipped);
  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Spanish Lesson</h2>
      <div className="border p-4 rounded bg-white shadow max-w-md mx-auto">
        <div
          onClick={handleFlip}
          className="text-center p-8 cursor-pointer bg-gray-50 rounded hover:bg-gray-100 transition"
        >
          <p className="text-xl font-semibold">{isFlipped ? cards[currentCard].back : cards[currentCard].front}</p>
        </div>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
        >
          Next Card
        </button>
      </div>
    </div>
  );
}

export default Lesson;
