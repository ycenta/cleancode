import React from 'react';
import Category from '../../components/Category';

function Quiz() {
  // Ici, je suppose que vous avez un tableau de cartes pour chaque catégorie.
  // Vous devrez remplacer ces tableaux par les vrais tableaux de cartes.
  const category1Cards = [{ id: 1, question: 'Question 1', answer: 'Answer 1' },{ id: 4, question: 'Question 1', answer: 'Answer 1'}]; 
  const category2Cards = [{ id: 2, question: 'Question 2', answer: 'Answer 2' }, /* ... */];
  const category3Cards = [{ id: 3, question: 'Question 3', answer: 'Answer 3' }, /* ... */];

  return (
    <div className="quiz">
      <Category name="Category 1" cards={category1Cards} />
      <Category name="Category 2" cards={category2Cards} />
      <Category name="Category 3" cards={category3Cards} />
    </div>
  );
}

export default Quiz;