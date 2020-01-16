var express=require('express');
var router=express.Router();
var user = require("../model/user");
var mongodb=require("mongodb")

router.get("/",function(req,res){
    var pagedata={"pagename":"userupdate","title":"sign up page"};
   res.render("layout",pagedata);
   console.log("sign up is  page is sdtarted");
});
module.exports=router;