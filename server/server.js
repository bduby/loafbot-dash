const express = require('express');
const { LISTENING_PORT } = require('./server.config.json');

const app = express();


app.use(express.json());


app.listen(LISTENING_PORT, () => console.log(`Server Listening On Port ${LISTENING_PORT}`));