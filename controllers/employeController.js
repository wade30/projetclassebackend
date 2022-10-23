const EmployeServices = require('../services/employeService');

const express = require('express');

const routes = express.Router();


routes.get('/', EmployeServices.getEmployes);

routes.get('/:id', EmployeServices.getEmpByID);

routes.delete('/:id', EmployeServices.deleteEmp);

routes.post('/poster', EmployeServices.create);

module.exports=routes;
