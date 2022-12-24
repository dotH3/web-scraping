const express = require('express');
var cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const paths = {
    freeGames: '/api/free-game',
}

app.use(paths.freeGames, require('./routes/free-games'));

app.listen(port, () => {
    console.clear();
    console.log(`SERVER ON: http://localhost:${port}/`);
});

