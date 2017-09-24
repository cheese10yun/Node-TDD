const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const user = require('./api/user/index');

process.env.NODE_ENV === 'test' ? app.use(morgan('dev')):false;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));

app.use('/users', user);

module.exports = app;
