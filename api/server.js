const express = require("express");
const cors = require('cors');
const WordleRouter = require('./routers/wordleRouter');
const SpellingBeeRouter = require('./routers/spellingbee');

const server = express();

server.use(express.json());
server.use(cors({ origin: true, credentials: true }));

/* Routers */
server.use('/wordle', WordleRouter);
server.use('/spellingbee', SpellingBeeRouter);

module.exports = server;
