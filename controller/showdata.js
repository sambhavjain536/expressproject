var express=require('express');
var router=express.Router();
var user = require("../model/user");
var mongodb=require("mongodb")
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

    
})
});

router.get("/delete/:id",function(req,res){
    var id =req.params.id;
    user.delete({_id:mongodb.ObjectId(id)},function(err, result){
        console.log(result);
        console.log("uhdbdfuvhabdsf");
        var pagedata={"title":"showdata","pagename":"showdata","data":result[0]};
        res.redirect("/showdata");

})
});




module.exports=router;