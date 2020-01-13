var express=require("express");
var router=express.Router();
var user = require("../model/user");

router.use("/login",require("./login"));
router.use("/signup",require("./signup"));
router.use("/showdata",require("./showdata"));




module.exports=router;