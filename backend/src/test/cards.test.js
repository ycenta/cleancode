const CardsService = require('../services/cardsService');

describe('CardsService', () => {
    let service;

    beforeEach(() => {
      service = new CardsService();
    });

    test('createCard', () => {
      const card = service.createCard('question', 'answer', 'tag');

      expect(card.id).toBe(1);
      expect(card.question).toBe('question');
      expect(card.answer).toBe('answer');
      expect(card.category).toBe('FIRST');
      expect(card.tag).toEqual('tag');
    });

    test('getCardById', () => {
      service.createCard('question', 'answer', 'tag');
      const card = service.getCardById(1);
      expect(card.id).toBe(1);
    });

    test('getAllCards', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const cards = service.getAllCards();
      expect(cards.length).toBe(2);
    });

    test('deleteCard', () => {
      service.createCard('question', 'answer', 'FIRST', 'tag1');
      const result = service.deleteCard(1);
      expect(result).toBe(true);
      expect(service.getAllCards().length).toBe(0);
    });

    //test pour l'update de la catégorie de la carte
    test('updateCategory - isValid is true and category is not the last one', () => {
      service.createCard('question', 'answer', 'tag');
      const card = service.getCardById(1);
      service.updateCategory(card, true);
      expect(card.category).toBe('SECOND');
    });
    
    test('updateCategory - isValid is true and category is the last one', () => {
      service.createCard('question', 'answer', 'tag');
      const card = service.getCardById(1);
      card.category = 'DONE';
      service.updateCategory(card, true);
      expect(card.category).toBe('DONE');
    });
    
    test('updateCategory - isValid is false', () => {
      service.createCard('question', 'answer', 'tag');
      const card = service.getCardById(1);
      card.category = 'THIRD';
      service.updateCategory(card, false);
      expect(card.category).toBe('FIRST');
    });

    // test pour la fonction du quizz
    test('getQuizz', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const cards = service.getQuizz();
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const cards = service.getQuizz('2021-01-01');
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date and no cards', () => {
      const cards = service.getQuizz('2021-01-01');
      expect(cards.length).toBe(0);
    });

    test('getQuizz - with no date and no cards', () => {
      const cards = service.getQuizz();
      expect(cards.length).toBe(0);
    });

});