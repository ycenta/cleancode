const express = require('express');
const router = express.Router();
const CardsController = require('../controllers/cardsController');
const cardsController = new CardsController();

// Route pour créer une nouvelle carte
router.post('/', (req, res) => {
  cardsController.createCard(req, res);
});

// Route pour récuperer toutes les cartes pour un jour donnée
router.get('/quizz', (req, res) => {
  cardsController.getQuizz(req, res);
});

// Route pour obtenir une carte par son ID
router.get('/:id', (req, res) => {
  cardsController.getCardById(req, res);
});

// Route pour mettre à jour une carte par son ID
router.put('/:id', (req, res) => {
  cardsController.updateCard(req, res);
});

// Route pour supprimer une carte par son ID
router.delete('/:id', (req, res) => {
  cardsController.deleteCard(req, res);
});

// Route pour récuperer toutes les cartes
router.get('/', (req, res) => {
  cardsController.getAllCards(req, res);
});

// Route pour vérifier une réponse
router.patch('/:id/answer', (req, res) => {
  cardsController.checkAnswer(req, res);
});

module.exports = router;