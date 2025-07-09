import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Lesson() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState([]);
  const [streak, setStreak] = useState(0);
  const [points, setPoints] = useState(0);
  const [progress, setProgress] = useState(0);
  const { state } = useLocation();

  const language = state?.language || 'es';
  const level = state?.level || 'Low';

  // Sample data for now (Claude API integration stub)
  const sampleCards = {
    es: {
      Low: [
        { front: 'Hello', back: 'Hola', type: 'vocab' },
        { front: 'Thank you', back: 'Gracias', type: 'vocab' },
        { front: 'Good morning', back: 'Buenos días', type: 'phrase' },
      ],
      Medium: [
        { front: 'I am', back: 'Soy', type: 'verb' },
        { front: 'To eat', back: 'Comer', type: 'verb' },
      ],
      High: [
        { front: 'I have been', back: 'He estado', type: 'verb' },
      ],
    },
    fr: {
      Low: [
        { front: 'Hello', back: 'Bonjour', type: 'vocab' },
        { front: 'Thank you', back: 'Merci', type: 'vocab' },
      ],
      Medium: [
        { front: 'I am', back: 'Je suis', type: 'verb' },
      ],
      High: [
        { front: 'I would like', back: 'Je voudrais', type: 'phrase' },
      ],
    },
    de: {
      Low: [
        { front: 'Hello', back: 'Hallo', type: 'vocab' },
        { front: 'Thank you', back: 'Danke', type: 'vocab' },
      ],
      Medium: [
        { front: 'I am', back: 'Ich bin', type: 'verb' },
      ],
      High: [
        { front: 'I have seen', back: 'Ich habe gesehen', type: 'verb' },
      ],
    },
  };

  useEffect(() => {
    // Simulate Claude API call (to be replaced with actual API)
    const fetchContent = async () => {
      try {
        // Placeholder: Replace with Anthropic API call
        // const response = await axios.post('https://api.anthropic.com/v1/complete', {
        //   prompt: `Generate ${level} level ${language} language lesson content`,
        //   model: 'claude-3-sonnet-20240229',
        //   max_tokens: 1000,
        // }, { headers: { 'x-api-key': 'YOUR_CLAUDE_API_KEY' } });
        // setCards(response.data.completions);

        // Using sample data for now
        setCards(sampleCards[language][level] || []);
      } catch (error) {
        console.error('Error fetching lesson content:', error);
      }
    };
    fetchContent();
  }, [language, level]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleCorrect = () => {
    setStreak(streak + 1);
    setPoints(points + 10);
    setProgress((currentCard + 1) / cards.length * 100);
    setIsFlipped(false);
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="container mx-auto p-6 animate-slide-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-blue-800">
          {language === 'es' ? 'Spanish' : language === 'fr' ? 'French' : 'German'} Lesson ({level})
        </h2>
        <div className="text-right">
          <p className="text-lg font-semibold">Streak: {streak} 🔥</p>
          <p className="text-lg font-semibold">Points: {points} ⭐</p>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div className="progress-bar h-4 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      {cards.length > 0 ? (
        <div className="border p-6 rounded-lg bg-white shadow-lg max-w-md mx-auto">
          <div
            onClick={handleFlip}
            className="text-center p-8 cursor-pointer bg-blue-50 rounded-lg hover:bg-blue-100 transition"
          >
            <p className="text-2xl font-semibold text-gray-800">
              {isFlipped ? cards[currentCard].back : cards[currentCard].front}
            </p>
            <p className="text-sm text-gray-500 mt-2">{cards[currentCard].type}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleCorrect}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Correct
            </button>
            <button
              onClick={() => setIsFlipped(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Incorrect
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading lesson content...</p>
      )}
    </div>
  );
}

export default Lesson;
