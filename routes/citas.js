const express = require('express');
const Router = express.Router();
const {TraerCitas,GuardarCitas,EliminarCita,ActualizarCita} = require('../controller/citas');


    Router.get('/',TraerCitas);
    Router.post('/',GuardarCitas);
    Router.delete('/:id',EliminarCita);
    Router.put('/:id',ActualizarCita);
    

module.exports = Router;