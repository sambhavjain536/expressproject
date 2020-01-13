var express=require("express");
var app=express();
var bodyparser=require("body-parser");

  app.set('view engine', 'ejs');
 app.use(bodyparser());
app.use(require("./controller/default"));

app.get("/",function(req,res){
    console.log("first file is started");
    res.render("layout",{name:"hello sambhav",pagename:"login"});

});
app.listen(process.env.PORT||2010,function(){
      var obj={};
    obj.name=" shri sambhav jain";
   obj.place="katni";
    console.log(obj);
    console.log("server is started..................!!!!!!!!!!!")

});