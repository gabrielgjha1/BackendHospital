const {Router} = require('express');
const rout = Router();
const { Login}  = require('../controller/login');
rout.post('/', Login);

module.exports = rout;   


