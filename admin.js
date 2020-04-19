var express = require('express');
var router = express.Router();
var pool=require('./pool')

router.get('/adminlogin',function(req,res){
res.render('adminlogin',{result:''})

})

router.get('/tiles',function(req,res){
  if(!req.session.admin)
  { res.render('adminlogin',{result:''}) }
   else{
  res.render('tiles',{admin:req.session.admin})}

})


router.post('/checklogin',function(req,res)
{ pool.query('select * from admin where adminid=? and password=?',[req.body.adminid,req.body.password],function(err,result){
  if(err)
  {
    res.render('adminlogin',{result:''})
  }
  else
  {if(result.length==0)
    {
        res.render('adminlogin',{result:'Invalid AdminId and Password'})
    }
    else
    { req.session.admin=result;
        res.render('tiles',{admin:req.session.admin})}

  }

})


});

module.exports = router;
