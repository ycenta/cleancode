import React, { useState } from 'react';
import { answerCard } from '../../services/apiService';
import PropTypes from 'prop-types';
import './Card.css';

function Card({id, question, answer, tag }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleClick = () => {
    if (!isFlipped) {
      setIsCorrect(userAnswer.toLowerCase() === answer.toLowerCase());
      answerCard(id, userAnswer.toLowerCase() === answer.toLowerCase());
    }
    setIsFlipped(!isFlipped);
  };

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleValidateClick = () => {
    setIsCorrect(true);
    answerCard(id, true);
  };

  return (
    <div className={`card ${isFlipped ? 'flip' : ''} ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''}`}>
      <div className={`card-question ${isFlipped ? 'hidden' : 'shown'}`}>
        {question}
        <input type="text" placeholder="Answer" value={userAnswer} onChange={handleInputChange} />
        <button className="show-answer" onClick={handleClick}>Show answer</button>
        <p className="tags">tags : {tag}</p>
      </div>
      <div className={`card-answer ${isFlipped ? 'shown invert' : 'hidden'}`}>
        {answer}
        <button className="show-answer" onClick={handleClick}>Show Question</button>
        <button className="Validate" onClick={handleValidateClick}>Validate</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Card;