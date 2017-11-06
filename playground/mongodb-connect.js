
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected successfully');

    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    },
    (err, res) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
        
    }); */

    // db.collection('Users').insertOne({
    //    name: 'Carlos',
    //    age: 22,
    //    location: 'Los Cabos' 
    // }, (err, res) => {
    //     if (err) return console.log('Unable to insert user', err);
    //     return console.log(JSON.stringify(res.ops, undefined, 2));
        
        
    // });
    
    db.collection('Users').findOne({
        'name': 'Carlos'
    }, (err, res) => {
        if (!err) return console.log(JSON.stringify(res._id.getTimestamp()));
    });

    db.close();
});