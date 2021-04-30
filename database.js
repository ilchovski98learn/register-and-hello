const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://Nikola:Nikola98n@cluster0.izl7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected!')
            _db = client.db();
            callback()
        })
        .then(err => {
            console.log(err)
            throw err;
        })
}

const getDb = () => {
    if (_db) {
        return _db;
    }

    throw 'No Database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;