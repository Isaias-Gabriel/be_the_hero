// Rota/recurso
// Rota é basicamente o caminho necessário para se acessar o recurso.
// R recurso é basicamento o destino de acesso, como um acesso ao banco de dados, um cadastro de usuário.

// Métodos http
// GET - busca/lista uma informação no backend
// POST - cria uma informação no backend
// PUT - altera uma informação no backend
// DELETE - deleta uma informação no backend

// Tipos de parâmetros

// Query params - parâmetros nomeados enviados na rota após "?" (filtros, paginação)
// Route params - parâmetros utilizados para identificar recursos
// Request body - corpo da requisição, utilizado para criar ou alterar recursos

// const params = request.query;
// const params = request.params;
// const body = request.body;
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;