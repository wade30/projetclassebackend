const EtudiantServices = require('../services/etudiantService');

const express = require('express');



const routes = express.Router();


routes.get('/', EtudiantServices.getEtudiants);

routes.get('/:id', EtudiantServices.getEtuByID);

//routes.delete('/:id', EtudiantServices.deleteEtu);

//routes.post('/poster', EtudiantServices.create);

module.exports=routes;
