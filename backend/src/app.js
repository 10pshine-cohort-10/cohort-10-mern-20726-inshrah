const express = require('express');
const cors = require('cors');
const pinoHttp = require('pino-http');
const logger = require('./config/logger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(pinoHttp({ logger }));

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Notes App API is running!',
  });
});

module.exports = app;