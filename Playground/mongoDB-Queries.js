const mongoose = require('./../Server/DB/mongoose');
const Todo = require('./../Server/Models/ToDo');

var id = "5a4b2b5ff5dc11842bf30685";

Todo.find({_id : id}).then((todos) => {
    console.log(todos)
},(e) => {
    console.log(e);
});

Todo.findOne({_id : id}).then((todo) => {
    console.log(todo)
},(e) => {
    console.log(e);
});