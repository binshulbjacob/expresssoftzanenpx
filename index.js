var express = require('express');
var router = express.Router();
var db=require('../db')

/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('index', { title:'EXPRESS JS', name:'binshul', contact:9847992841 ,email:'binshul123@', password:'pass123' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
  
});

router.get('/login',function(req,res,next){
  res.render('login');

});

router.get('/login2',function(req,res,next){

const login={name:"dhanshul",admin:true}
  res.render('login2',{login});    
});
///////////////////////////////////////////////////////////////

router.get('/product', function(req, res, next) {
  res.render('product');
});




router.post('/products',function(req,res)
{
  var productcategory=req.body.productcategory
  var productname=req.body.productname
  var productamount=req.body.productamount
  var productdetails=req.body.productdetails
  var sql=`insert into product(product_category,product_name,product_amount,product_details) values("${productcategory}","${productname}","${productamount}","${productdetails}")`;
db.query(sql,function(err,result){
  if(err) throw err;
  res.redirect('/product');
})

})



router.get('/profile', function(req, res, next) {
  res.render('profile');
  


});

//profile//

router.post('/profile',function(req,res)
{
  var fullname=req.body.fullname
  var address=req.body.address
  var pin=req.body.pin
  var gender=req.body.gender
  var district=req.body.district
  var contact=req.body.contact
  var email=req.body.email
  var sql=`insert into product2(fullname,address,pin,gender,district,contact,email) values("${fullname}","${address}","${pin}","${gender}","${district}","${contact}","${email}")`;
   db.query(sql,function(err,result){
    res.redirect('/profile');
   })

})
///////userview///

router.get('/userpro', function(req, res, next) { 
  var sql='select * from product';
  db.query(sql,function(err,rows,fields){
  if (err) throw err;
  res.render('userpro',{data:rows})
})
});


router.get('/profileuser', function(req, res, next) {
  var sql='select * from product2';
  db.query(sql,function(err,rows,fields){
  if (err) throw err;
  res.render('profileuser',{data:rows})
})
});


module.exports = router;