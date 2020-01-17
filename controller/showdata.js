var express=require('express');
var router=express.Router();
var user = require("../model/user");
router.get("/",function(req,res){
    user.find(function(err,result){
      if(err){
          console.log(err);
      }
      if(result)
      {
          
    var pagedata={"pagename":"showdata","tittle":"showdata of form post","data":result};
    res.render("layout",pagedata);
    console.log("showdata is running");
      }

    
});
});






module.exports=router;