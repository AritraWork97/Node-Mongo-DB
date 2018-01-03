var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    }
  });

  module.exports = {Todo};