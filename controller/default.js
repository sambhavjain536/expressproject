var express=require("express");
var router=express.Router();
var path=require("path");
var user = require("../model/user");

router.use("/login",require("./login"));
router.use("/logout",require("./logout"));
router.use("/signup",require("./signup"));
router.use("/showdata",backedor ,require("./showdata"));
router.use("/userupdate",require("./userupdate"));
function backedor(req,res,next){
    if(!req.session.user_loged_in){
      res.redirect("/login");
    }
    next();
}


module.exports=router;