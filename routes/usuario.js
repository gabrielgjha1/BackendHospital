const express = require('express');
const Router = express.Router();
const {TraerUsuario,CrearUsuarios,EliminarUsuario,ActualizarUSuario} = require('../controller/usuario');

Router.get('/',TraerUsuario);
Router.post('/',CrearUsuarios);
Router.delete('/:id',EliminarUsuario);
Router.put('/:id',ActualizarUSuario);


module.exports = Router;