var express=require('express');
var router=express.Router();
var user=require("../model/user");
router.get("/",function(req,res){
    console.log("edit and update page is running ");
    var pagedata={"pagename":"userupdate","tittle":"pagedata of edit"}
    res.render("layout",pagedata);
});
