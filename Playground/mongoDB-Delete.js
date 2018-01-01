const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
       return console.log('cant connect to mongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('ToDos').deleteMany({name: 'Arnab'}).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    },(err) => {
        console.log(err);
    });
  
   // db.close();
});