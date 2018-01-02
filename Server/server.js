const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp');

var users = mongoose.model('users', {
    email : {
        type : String,
        required: true,
        minlength: 1,
        trim : true
    }
});

var newUser = new users({
    email : 'aritrabanerjee97@gmail.com'
});

newUser.save().then((doc) => {
        console.log(doc);
}, (e) => {
    console.log(e);
})