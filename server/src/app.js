// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const bodyParser = require('body-parser');
// eslint-disable-next-line no-undef
const cors = require('cors');
// eslint-disable-next-line no-undef
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => { 
  res.send({
    message: 'hello world'
  });
});

app.listen(port);