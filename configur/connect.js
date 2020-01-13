var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sambhavjain:sambhavjain@cluster0-pbcs6.mongodb.net/test?retryWrites=true&w=majority";
module.exports.init=function(cb){
    MongoClient.connect(url,cb)     
}
