const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send('successful startingpoint');
});


app.listen(process.env.PORT || 8081);
