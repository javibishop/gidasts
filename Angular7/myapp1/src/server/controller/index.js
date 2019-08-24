const express = require('express')
const app = express()

app.use(require('./usuarie'));
app.use(require('./login'));
app.use(require('./pais'));
app.use(require('./localidad'));
app.use(require('./provincia'));
app.use(require('./partido'));
app.use(require('./especialidad'));
app.use(require('./consejeria'));

module.exports = app;