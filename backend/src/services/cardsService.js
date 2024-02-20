
class Card {

  constructor(id, question, answer, category, tag) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.category = category;
    this.tag = tag;
  }
}
  
class CardsService {

  constructor() {
    this.cards = [];
  }

  createCard(question, answer, tag) {
    let id = 1;
    while (this.cards.some(card => card.id === id)) {
      id++;
    }
    const card = new Card(id, question, answer, "FIRST", tag);
    this.cards.push(card);
    return card;
  }

  getCardById(id) {
    return this.cards.find(card => card.id === id);
  }

  getAllCards(tags=null) {
    if (tags) {
      if (Array.isArray(tags)) { 
        return this.cards.filter(card => tags.some(tag => card.tag === tag));
      } else {
        return this.cards.filter(card => card.tag === tags);
      }
    }
    return this.cards;
  }

  updateCard(id, question, answer, category, tag) {
    const cardIndex = this.cards.findIndex(card => card.id === id);
    if (cardIndex !== -1) {
      const card = new Card(id, question, answer, category, tag);
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

  updateCategory(card, isValid) {
    const categories = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH", "DONE"];

    if (isValid) {
      const index = categories.indexOf(card.category);
      if (index < categories.length - 1) {
        card.category = categories[index + 1];
      }
    } else {
      card.category = "FIRST";
    }
  }

  getQuizz(date) {
    const allCards = this.getAllCards();

    if (!date) {
      date = new Date();
    } else {
      date = new Date(date);
    }

    const firstDayOfYear = new Date(date.getFullYear()+"-01-01");

    return allCards.filter(card => {
      const daysSinceFirstDayOfYear = this.getDateDiffInDays(firstDayOfYear, date);
      switch (card.category) {
        case "FIRST":
          return true;
        case "SECOND":
          return daysSinceFirstDayOfYear % 2 === 0;
        case "THIRD":
          return daysSinceFirstDayOfYear % 4 === 0;
        case "FOURTH":
          return daysSinceFirstDayOfYear % 8 === 0;
        case "FIFTH":
          return daysSinceFirstDayOfYear % 16 === 0;
        case "SIXTH":
          return daysSinceFirstDayOfYear % 32 === 0;
        case "SEVENTH":
          return daysSinceFirstDayOfYear % 64 === 0;
        default:
          return false;
      }
    });
  }

  getDateDiffInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
  
}


module.exports = CardsService;