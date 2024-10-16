const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let mensagem = {mensagem: 'Olá mundo!'};
  res.json(mensagem);
});

app.listen(3333, () => {
  let data = new Date();
  console.log('Servidor node iniciando em: ' + data);
});
