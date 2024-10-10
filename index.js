const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3333, () => {
  let data = new Date();
  console.log('Servidor node iniciando em: ' + data);
});
