const API_URL = 'http://localhost:8080';

export function getCards(tags = '') {
  const url = tags
    ? `${API_URL}/cards?tags=${tags}`
    : `${API_URL}/cards`;
    return fetch(url)
      .then(response => response.json())
      .then(cards => {
        return cards.reduce((categories, card) => {
          if (!categories[card.category]) {
            categories[card.category] = [];
          }
          categories[card.category].push(card);
          return categories;
        }, {});
      });
}

export function getCardsQuizz(date = '') {
  const url = date
    ? `${API_URL}/cards/quizz?date=${date}`
    : `${API_URL}/cards/quizz`;
    return fetch(url)
      .then(response => response.json())
      .then(cards => {
        return cards.reduce((categories, card) => {
          if (!categories[card.category]) {
            categories[card.category] = [];
          }
          categories[card.category].push(card);
          return categories;
        }, {});
      });
}

export function answerCard(cardId, isValid) {
    return fetch(`${API_URL}/cards/${cardId}/answer`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isValid }),
    })
  }

export function createCard(question, answer, tag) {
  return fetch(`${API_URL}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question, answer, tag  }),
  })
  .then(response => response.json());
}