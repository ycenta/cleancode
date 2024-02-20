import React, { useEffect, useState } from 'react';
import Category from '../../components/Category';
import { getCardsQuizz } from '../../services/apiService';
import './Quizz.css';

function Quiz() {
  const [cardsByCategory, setCardsByCategory] = useState({});

  useEffect(() => {
    getCardsQuizz().then(data => setCardsByCategory(data));
  }, []);

  return (
    <>       
    <button className="button" onClick={() => window.location.href = '/'}>Back to Home</button>
    <button className="button" onClick={() => window.location.href = '/create-card'}>Create Card</button>
    <div className="quiz">
    {Object.entries(cardsByCategory).map(([categoryName, cards]) => (
        <Category key={categoryName} name={categoryName} cards={cards} />
      ))}
    </div>
    </>

  );
}

export default Quiz;