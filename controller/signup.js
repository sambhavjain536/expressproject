var express=require('express');
var router=express.Router();
router.get("/",function(req,res){
    var pagedata ={"pagename":"signup","tittle":"signup page"}
    res.render("layout",pagedata);
    console.log("sign up is running ");
});

module.exports=router;