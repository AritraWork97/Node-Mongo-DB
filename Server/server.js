const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./DB/mongoose');
const {user} = require('./Models/User');
const {Todo} = require('./Models/ToDo');

const port = process.env.PORT || 3000;
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

});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove({
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

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set : body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        } else {
            res.send({todo});
        }
    }).catch((e) => {
        res.status(400).send();
    });
});

app.post('/users', (req, res) => {
    var id = _.pick(req.body,['email', 'password']);
    var users = new user(id);
    users.save().then((result) => {
        res.send(result);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () =>{console.log(`Started at port ${port}`)});
