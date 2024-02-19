class Card {
    constructor(id, question, answer, category, tags) {
      this.id = id;
      this.question = question;
      this.answer = answer;
      this.category = category;
      this.tags = tags;
    }
  }
  
  class CardsService {
    constructor() {
      this.cards = [];
    }
  
    createCard(question, answer, category, tags) {
      const id = this.cards.length + 1;
      const card = new Card(id, question, answer, category, tags);
      this.cards.push(card);
      return card;
    }
  
    getCardById(id) {
      return this.cards.find(card => card.id === id);
    }

    getAllCards() {
        return this.cards;
    }
  
    updateCard(id, question, answer, category, tags) {
      const cardIndex = this.cards.findIndex(card => card.id === id);
      if (cardIndex !== -1) {
        const card = new Card(id, question, answer, category, tags);
        this.cards[cardIndex] = card;
        return card;
      }
      return null;
    }
  
    deleteCard(id) {
      const cardIndex = this.cards.findIndex(card => card.id === id);
      if (cardIndex !== -1) {
        this.cards.splice(cardIndex, 1);
        return true;
      }
      return false;
    }
  }

  module.exports = CardsService;