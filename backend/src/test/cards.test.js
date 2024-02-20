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
        expect(card.tags).toEqual('tag');
    });

    test('getCardById', () => {
        service.createCard('question', 'answer', 'FIRST', 'tag');
        const card = service.getCardById(1);
        expect(card.id).toBe(1);
    });

    test('getAllCards', () => {
        service.createCard('question1', 'answer1', 'FIRST', 'tag1');
        service.createCard('question2', 'answer2', 'FIRST', 'tag2');
        const cards = service.getAllCards();
        expect(cards.length).toBe(2);
    });

    test('updateCard', () => {
        service.createCard('question', 'answer', 'FIRST', 'tag');
        const updatedCard = service.updateCard(1, 'newQuestion', 'newAnswer', 'SECOND', 'newTag');
        expect(updatedCard.question).toBe('newQuestion');
        expect(updatedCard.answer).toBe('newAnswer');
        expect(updatedCard.category).toBe('SECOND');
        expect(updatedCard.tags).toEqual('newTag');
    });

    test('deleteCard', () => {
        service.createCard('question', 'answer', 'FIRST', 'tag1');
        const result = service.deleteCard(1);
        expect(result).toBe(true);
        expect(service.getAllCards().length).toBe(0);
    });
});