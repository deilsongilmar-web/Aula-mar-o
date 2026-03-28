const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Requisição chegou!');
});

app.listen(1234, () => {
    console.log("Servidor iniciado na porta 1234");
});