var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {

  const values=["binshul","binshulvilla","trader"]


  const user={name:'binshul', address:'villa',gender:'male'}


  const five=[{name:'binshul',address:'villa',    gender:'male'},
            {name:'rahul',  address:'rahulvilla',gender:'male'},
            {name:'adi',    address:'adivilla',  gender:'male'},
            {name:'robert', address:'robvilla',  gender:'male'},
            {name:'parag',  address:'paragvilla',gender:'male'}]




   res.render('about',{five,values,user});                                                                                    //only one render add
   


});
module.exports = router;
