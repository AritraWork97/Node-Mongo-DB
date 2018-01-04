const {ObjectId} = require('mongodb');

const {mongoose} = require('./../Server/DB/mongoose');
const {Todo} = require('./../Server/Models/ToDo');

var id = "5a4b2b5ff5dc11842bf30685";
if(!ObjectId.isValid(id)) {
    return console.log('ID not valid');
}

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log(todo);
}).catch((e) => {
    console.log(e);
});