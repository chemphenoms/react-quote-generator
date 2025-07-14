// src/App.jsx
import { useState } from 'react';
import './App.css';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" }
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  // 4. Create the handler function
  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote); // Update the state with the new random quote
  };

  return (
    <div className="App">
      <div className="quote-box">
        <p className="quote-text">"{quote.text}"</p>
        <h2 className="quote-author">- {quote.author}</h2>
        {/* 5. Attach the handler to the button's onClick event */}
        <button className="new-quote-btn" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;