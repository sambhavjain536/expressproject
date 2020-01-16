var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var session=require("express-session");
var cookie=require("cookie-parser");

  app.set('view engine', 'ejs');
 app.use(bodyparser());
app.use(cookie());
app.use(session({
  secret: 'ziasy',
  saveUninitialized: true,
}));
app.use(function(req,res,next){
  res.locals.session=req.session
  next();     
})
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