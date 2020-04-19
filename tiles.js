var express = require('express');
var router = express.Router();
var pool=require('./pool')
var multer=require('./multer')


/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.admin)
  {
    res.render('adminlogin',{result:''})
  }
  else{
  res.render('tiles', { msg:""});
  }
});



router.get('/displayalltiles', function(req,res){

  res.render('displayalltiles',{data:result})

})




module.exports = router;
