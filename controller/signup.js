var express=require('express');
var router=express.Router();
var user=require("../model/user");
router.get("/",function(req,res){
    var pagedata ={"pagename":"signup","tittle":"signup page"}
    res.render("layout",pagedata);
    console.log("sign up is running ");
});
router.post("/signup",function(req,res){
console.log("some data of sign up");
var obj={};
obj.email=req.body.email;
obj.pswd=req.body.pswd;
console.log(obj);

user.findwhere(obj,function(err,res){
  if(result.length==0)
  {
    console.log("this email and password is incorrect");
    res.redirect("/showdata");
  }
  else
{
  if(obj.pswd=req.body.pswd)
  {
    res.send("password is correct")
   
  }
  else{
    res.send("password is incorrect");
    
  }
}


});
});
    
 


module.exports=router;