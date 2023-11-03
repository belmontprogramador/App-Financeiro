const express = require ('express');
const rotas = require ('./rotas/rotas.js')

const app = express();
const port = 3001;

app.use(express.json());
 
app.use(rotas)

app.listen(3001);
