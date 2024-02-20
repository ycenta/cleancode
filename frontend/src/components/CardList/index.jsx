import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './CardList.css';

function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} question={card.question} answer={card.answer} tag={card.tag} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;