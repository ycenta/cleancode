const CardsService = require('../services/cardsService');
const cardsService = new CardsService();

class CardsController {
  createCard(req, res) {
    const { question, answer, category, tags } = req.body;
    const card = cardsService.createCard(question, answer, category, tags);
    res.status(201).json(card);
  }

  getCardById(req, res) {
    const id = parseInt(req.params.id);
    const card = cardsService.getCardById(id);
    if (card) {
      res.json(card);
    } else {
      res.status(404).send('Card not found');
    }
  }

  getAllCards(req, res) {
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
}

module.exports = CardsController;