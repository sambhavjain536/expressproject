var express=require('express');
var router=express.Router();
var user=require("../model/user");
var nodemailer = require('nodemailer');
router.get("/",function(req,res){
  console.log("here is page is open for the login page ");
    var pagedata ={"pagename":"login","tittle":"login page"}
    res.render("layout",pagedata);
    console.log(req.body,"rrrrrr555555555555555555555")
});


router.post("/",function(req,res){
console.log("some data of  login page ");
var obj={};
obj.email=req.body.email;
obj.pswd=req.body.pswd;
console.log(obj);

user.findwhere(obj,function(err,result){
  if(err)
  {
    console.log("err");
      }
  else
{
  console.log(result,"fguttu")
  if(result.length>0)
  {
    req.session.userid=result[0].id;
    req.session.name=result[0].name;
    req.session.user_loged_in=true;
     res.redirect("/showdata")

     var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'swati30v@gmail.com',
        pass: '19970530'
      }
    });
    
    var mailOptions = {
      from: 'swati30v@gmail.com',
      to: req.body.email,
      subject: 'Sending Email using Node.js',
       text:'That was easy sucessfully login!'
     
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        console.log('jhbdfsjbdhfjs');
      } else {
        console.log('Email sent: ' + info.response);
      }
    });


   
  }
  else{
    res.send("incorrect password and email");
    
  }
}

})
});    

module.exports=router;