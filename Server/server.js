const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById({
        _id : id
    }).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    }).catch((e) => {
        res.status(400).send();
    });
    
});

app.get('/todos', (req, res) => {
    Todo.find().then((todo) => {
        res.send({todo});
    },(e) => {
        res.status(400).send(e);
    });

})

app.listen(3000, () =>{console.log('Started at port 3000')});
