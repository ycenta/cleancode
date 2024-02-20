const express = require('express');
const cardsRoutes = require('./routes/cardsRoutes.js');
const cors = require('cors');

const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

//pour qu'on puisse accéder à l'API depuis n'importe quelle origine
app.use(cors());

// Utilisation des routes
app.use('/cards', cardsRoutes);


// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});