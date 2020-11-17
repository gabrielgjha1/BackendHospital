const express = require('express');
const Router = express.Router();
const {TraerUsuario,CrearUsuarios,EliminarUsuario,ActualizarUSuario} = require('../controller/usuario');
const { validarJWT } = require('../middleware/validar-jwt');

Router.get('/',TraerUsuario);
Router.post('/',CrearUsuarios);
Router.delete('/:id',validarJWT,EliminarUsuario);
Router.put('/:id',ActualizarUSuario);


module.exports = Router;