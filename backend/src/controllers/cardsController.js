const CardsService = require('../services/cardsService');
const cardsService = new CardsService();

class CardsController {
  createCard(req, res) {
    const { question, answer, tag } = req.body;
    const card = cardsService.createCard(question, answer, tag);
    res.status(201).json(card);
  }

  getCardById(req, res) {
    const id = parseInt(req.params.id);
    const card = cardsService.getCardById(id);
    if (card) {
      res.json(card);
    } else {
      res.status(404).description('Card not found');
    }
  }

  getAllCards(req, res) {
    const tags = req.query.tags;
    if (tags) {
      const allCards = cardsService.getAllCards(tags);
      res.json(allCards);
      return;
    }
    const allCards = cardsService.getAllCards();
    res.json(allCards);
  }

  updateCard(req, res) {
    const id = parseInt(req.params.id);
    const { question, answer, category, tags } = req.body;
    const updatedCard = cardsService.updateCard(id, question, answer, category, tags);
    if (updatedCard) {
      res.json(updatedCard);
    } else {
      res.status(404).send('Card not found');
    }
  }

  deleteCard(req, res) {
    const id = parseInt(req.params.id);
    const deleted = cardsService.deleteCard(id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send('Card not found');
    }
  }

  checkAnswer(req, res) {
    const id = parseInt(req.params.id);
    const { isValid } = req.body;

    if (isValid === undefined) {
      res.status(400).send('Bad request');
      return;
    }

    const card = cardsService.getCardById(id);

    if (!card) {
      res.status(404).send('Card not found');
      return;
    }

    cardsService.updateCategory(card, isValid);
    res.status(204).send("Answer has been taken into account");
  }

  getQuizz(req, res) {
    const date = req.query.date? req.query.date : null;

    const quizz = cardsService.getQuizz(date);
    res.json(quizz);
  }
}

module.exports = CardsController;