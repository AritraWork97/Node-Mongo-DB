const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./DB/mongoose');
const {user} = require('./Models/User');
const {Todo} = require('./Models/ToDo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
   var newtodo = new Todo({
       text : req.body.text
   });
   newtodo.save().then((docs) => {
       res.send(docs);
   }, (e) => {
       res.status(400).send(e);
   });
})

app.listen(3000, () =>{console.log('Started at port 3000')});