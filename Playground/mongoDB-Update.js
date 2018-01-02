const {MongoClient, ObjectId} = require('mongodb');

var obj = new ObjectId();

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
       return console.log('cant connect to mongoDb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('ToDos').findOneAndUpdate({
        _id : new ObjectId('5a4926570cceb936108f373e')
    }, {
        $set : {
            completed : true
        }
    }, {
        returnOriginal : false
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    })
  
   // db.close();
});