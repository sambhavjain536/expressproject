  
var connect=require("../configur/connect");


module.exports.insert=function(obj,cb){
    connect.init(function(err, client){
        console.log("++++++++++++++++++",err,"TTTTTTTTTTTTTTT");
          var db = client.db("firstnodetest")
          db.collection('user').insert(obj, cb)
      });

  }

  
  
module.exports.find=function(cb){
    connect.init(function(err,client){
      var db = client.db("firstnodetest")
      console.log("++++++++++++++++find query++",err,"TTTTTTTTTTTTTTT");
          db.collection('user').find({}).toArray(cb);
      });
  
  }
  
  module.exports.findwhere=function(obj,cb){
    connect.init(function(err,client){
      var db = client.db("firstnodetest")
          db.collection('user').find(obj).toArray(cb);
      }); 
  }
  
module.exports.update=function(where,obj,cb){
    connect.init(function(err,client){
      var db = client.db("firstnodetest")
      console.log("update query is run")
          db.collection('user').updateOne(where, {$set: obj},cb);
      }); 
  } 
  module.exports.delete=function(where,cb)
  {
      connect.init(function(err,client){
        var db = client.db("firstnodetest")
        console.log("delete query is running ");
        db.collection('user').remove(where,cb);
      });
  }

