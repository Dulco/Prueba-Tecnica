const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const http          = require('http');
const app           = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
require('./routes')(app);
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;