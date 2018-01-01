const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
       return console.log('cant connect to mongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('users').insertOne({
        name : 'Aritra',
        age : 20
    }, (err, res) => {
            if(err) {
                return console.log('unable to add data',err);
            }
            console.log(JSON.stringify(res.ops, undefined, 2));
    });

    db.close();
});