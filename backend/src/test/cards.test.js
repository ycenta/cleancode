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

    test('getAllCards - with tag', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const cards = service.getAllCards('tag1');
      expect(cards.length).toBe(1);
    });

    test('getAllCards - with tags with no cards', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const cards = service.getAllCards(['tag3', 'tag4']);
      expect(cards.length).toBe(0);
    });

    test('getAllCards - with tags', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const cards = service.getAllCards(['tag1', 'tag2']);
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
      const cards = service.getQuizz('2024-01-01');
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date and no cards', () => {
      const cards = service.getQuizz('2024-01-01');
      expect(cards.length).toBe(0);
    });

    test('getQuizz - with no date and no cards', () => {
      const cards = service.getQuizz();
      expect(cards.length).toBe(0);
    });

    //test avec des cartes de catégorie différente
    test('getQuizz - with date and a card of second category and wrond day for second category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'SECOND';
      const cards = service.getQuizz('2024-01-02');
      expect(cards.length).toBe(1);
    });

    test('getQuizz - with date and a card of second category and right day for second category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'SECOND';
      const cards = service.getQuizz('2024-01-03');
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date and a card of third category and wrong day for third category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'THIRD';
      const cards = service.getQuizz('2024-01-04');
      expect(cards.length).toBe(1);
    });

    test('getQuizz - with date and a card of third category and right day for third category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'THIRD';
      const cards = service.getQuizz('2024-01-05');
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date and a card of fourth category and wrong day for fourth category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'FOURTH';
      const cards = service.getQuizz('2024-01-04');
      expect(cards.length).toBe(1);
    });

    test('getQuizz - with date and a card of fourth category and right day for fourth category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'FOURTH';
      const cards = service.getQuizz('2024-01-09');
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date and a card of fifth category and wrong day for fifth category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'FIFTH';
      const cards = service.getQuizz('2024-01-04');
      expect(cards.length).toBe(1);
    });

    test('getQuizz - with date and a card of fifth category and right day for fifth category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'FIFTH';
      const cards = service.getQuizz('2024-01-17');
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date and a card of sixth category and wrong day for sixth category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'SIXTH';
      const cards = service.getQuizz('2024-01-04');
      expect(cards.length).toBe(1);
    });

    test('getQuizz - with date and a card of sixth category and right day for sixth category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'SIXTH';
      const cards = service.getQuizz('2024-02-02');
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date and a card of seventh category and wrong day for seventh category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'SEVENTH';
      const cards = service.getQuizz('2024-01-04');
      expect(cards.length).toBe(1);
    });

    test('getQuizz - with date and a card of seventh category and right day for seventh category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'SEVENTH';
      const cards = service.getQuizz('2024-03-05');
      expect(cards.length).toBe(2);
    });

    test('getQuizz - with date and a card of done category and wrong day for done category', () => {
      service.createCard('question1', 'answer1', 'tag1');
      service.createCard('question2', 'answer2', 'tag2');
      const card = service.getCardById(1);
      card.category = 'DONE';
      const cards = service.getQuizz('2024-01-04');
      expect(cards.length).toBe(1);
    });

});