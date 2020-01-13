var express=require("express");
var router=express.Router();
var user = require("../model/user");
var mongodb=require("mongodb")

router.get("/",function(req,res){
    var pagedata={"pagename":"login","title":"login page"};
   res.render("layout",pagedata);
   console.log("login page is sdtarted")
});
router.post("/",function(req,res){
    var obj={};
    obj.fn=req.body.fn; 
    obj.ln=req.body.ln;
    obj.email=req.body.email;
    obj.number=req.body.number;
 
    user.insert(req.body, function(err, result){
            if(err){
                console.log("errrrr",err);
            }
            else(result)
            console.log(result);
            console.log("herer is redirect pagre is open");
            res.redirect('/showdata');
        });
});

router.post("/update",function(req,res){
    var obj={name:"sanjay",surname:"patidaar"}
    user.update({ $or: [ {email:"sanjaypatidar402@gmail.com"},{email:"sawti@gmail.com"} ] } ,obj,function(err,result){

    })
})


module.exports=router;
