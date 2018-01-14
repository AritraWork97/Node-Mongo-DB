const mongoose = require('mongoose');
const validator = require('validator');

var user = mongoose.model('user', {
    email : {
        type : String,
        required: true,
        minlength: 1,
        trim : true,
        unique : true,
        validate : {
            validator : (value) => {
                return validator.isEmail(value);
            },
            message : '{value} is not valid'
        }
    },
    password : {
        type : String,
        required: true,
        minlength: 8,
    },
    tokens : [{
        access : {
            required : true,
            type : String
        },
        token : {
            required : true,
            type : String
        }
    }]
});

module.exports = {user};