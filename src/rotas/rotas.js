const express = require('express');
const controll  = require ( '../controladores/controladores.js' );

const rotas = express();

rotas.get('/', controll);

module.exports = rotas
