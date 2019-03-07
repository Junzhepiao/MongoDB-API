const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/transactions');
mongoose.Promise = global.Promise;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
})