import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CardList from '../CardList';

function Category({ name, cards }) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="category">
      <button onClick={handleClick}>
        {name}
      </button>
      {isShown && <CardList cards={cards} />}
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;