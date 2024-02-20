const API_URL = 'http://localhost:8080';

export function getCards(tags = '') {
  // if tags is not empty, add it to the URL (?tags=tag1&tags=tag2)
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

export function answerCard(cardId, isValid) {
    return fetch(`${API_URL}/cards/${cardId}/answer`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isValid }),
    })
    .then(response => response.json());
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