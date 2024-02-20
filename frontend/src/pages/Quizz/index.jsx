import React, { useEffect, useState } from 'react';
import Category from '../../components/Category';
import { getCards } from '../../services/apiService';
import './Quizz.css';

function Quiz() {
  const [cardsByCategory, setCardsByCategory] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getCards().then(data => setCardsByCategory(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    getCards(event.target.value).then(data => setCardsByCategory(data));
  };

  return (
    <>       
    <button className="button" onClick={() => window.location.href = '/'}>Back to Home</button>
    <button className="button" onClick={() => window.location.href = '/create-card'}>Create Card</button>
    <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
    <div className="quiz">
    {Object.entries(cardsByCategory).map(([categoryName, cards]) => (
        <Category key={categoryName} name={categoryName} cards={cards} />
      ))}
    </div>
    </>

  );
}

export default Quiz;