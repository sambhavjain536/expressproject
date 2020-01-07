var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
    var pagedata={"pagename":"login","title":"login page"};
   res.render("layout",pagedata);
});

module.exports=router;
// router.get("/",function(req,res){
//     var pagedata={"pagename":"login","title":"login page"};
//    res.render("layout",pagedata);
// });