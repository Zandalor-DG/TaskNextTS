const express = require('express');
const bodyParser = require('body-parser');
const bookStoreRouter = require('./routes/bookStoreRouter');
const cors = require('cors');

const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(__dirname + '/public'));

app.use('/book', bookStoreRouter);

server.listen(4000, () => console.log('server started'));
