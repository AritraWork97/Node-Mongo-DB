const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
       return console.log('cant connect to mongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('ToDos').find().count().then((count) => {
            console.log('The number of documents are', count);
    }, (err) => {
        console.log('Cannot fetch data', err);
    });
  
   // db.close();
});