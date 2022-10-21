const express = require('express');
const bodyParser = require('body-parser');
const EtudiantController = require('./controllers/etudiantController');
const EmployeController = require('./controllers/employeController');
const basicAuth = require('./middlewares/basicAuth')


const app = express();
app.use(bodyParser.json());
app.use(basicAuth);

app.use('/etudiants', EtudiantController);

app.use('/employes', EmployeController);


module.exports = app;