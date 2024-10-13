import React, { useState, useEffect } from 'react';
import './App.css';

// Predefined set of colors that contrast well with text
const cardColors = [
  '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB',
  '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3',
  '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#F5F5F5'
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      {/* Navbar */}
      <div className="navbar">
        <h1>Flashcard Study App</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Introduction */}
      <div className="introduction">
        Welcome to the Flashcard Study App! Add your own flashcards to study and reveal the answers when you're ready. Perfect for memorizing terms, definitions, or anything you need to study.
      </div>

      {/* Flashcards Section */}
      <Flashcards />

      {/* Footer */}
      <footer className="footer">
        Developed by Krishnansh Sharma | <a href="https://www.github.com/whokrishnansh" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  );
}

function Flashcards() {
  const [flashcards, setFlashcards] = useState(() => {
    const savedFlashcards = localStorage.getItem('flashcards');
    return savedFlashcards ? JSON.parse(savedFlashcards) : [];
  });
  const [newCard, setNewCard] = useState({ question: '', answer: '' });
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
  }, [flashcards]);

  const addFlashcard = () => {
    if (newCard.question && newCard.answer) {
      setFlashcards([...flashcards, { ...newCard, color: getRandomColor() }]); // Add random color
      setNewCard({ question: '', answer: '' });
    }
  };

  const toggleAnswer = (index) => {
    setVisibleAnswerIndex(index === visibleAnswerIndex ? null : index); // Toggle answer visibility
  };

  const deleteFlashcard = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index);
    setFlashcards(updatedFlashcards);
  };

  // Function to get a random color from the predefined set
  const getRandomColor = () => {
    return cardColors[Math.floor(Math.random() * cardColors.length)];
  };

  // Function to determine appropriate text color based on background brightness
  const getTextColor = (bgColor) => {
    const colorBrightness = parseInt(bgColor.replace('#', ''), 16);
    return colorBrightness > 0xffffff / 2 ? '#000' : '#fff';
  };

  return (
    <div className="flashcards-container">
      <h2>Your Flashcards</h2>

      <div className="flashcard-form">
        <input
          type="text"
          placeholder="Enter Question"
          value={newCard.question}
          onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Answer"
          value={newCard.answer}
          onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
        />
        <button onClick={addFlashcard}>Add Flashcard</button>
      </div>

      {/* Display Flashcards */}
      <div className="flashcards-list">
        {flashcards.map((card, index) => (
          <div
            key={index}
            className="flashcard"
            onClick={() => toggleAnswer(index)}
            style={{
              backgroundColor: card.color, // Random background color
              color: getTextColor(card.color) // Appropriate text color
            }}
          >
            <button
              className="delete-btn"
              onClick={(e) => { e.stopPropagation(); deleteFlashcard(index); }}
              style={{ color: getTextColor(card.color) }} // Make delete button visible
            >
              &#10005;
            </button>
            <p><strong>Q:</strong> {card.question}</p>
            <p className={`reveal-answer ${visibleAnswerIndex === index ? 'visible' : ''}`}><strong>A:</strong> {card.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
