var express=require('express');
var router=express.Router();
var user = require("../model/user");
var mongodb=require("mongodb")

router.get("/",function(req,res){
    var pagedata={"pagename":"userupdate","title":"sign up page"};
   res.render("layout",pagedata);
   console.log("sign up is  page is sdtarted");
});
router.post('/',function(req,res){
    console.log(req.body,"SSSSSSSSSS")
      user.update({_id:mongodb.ObjectId(req.body.id)},req.body,function(err,result){
          console.log(result)
          if(err){
              res.send(err)
          }else{
              res.redirect("showdata");
          }
      })
});



router.get("/edit/:id", function(req, res){
    var id = req.params.id;
    user.findwhere({_id:mongodb.ObjectId(id)},function(err, result){
        console.log(result);
        var pagedata={"title":"updateuser","pagename":"userupdate","data":result[0]};
        res.render("layout",pagedata);
    })
});   


module.exports=router;