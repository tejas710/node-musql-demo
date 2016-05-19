var express = require('express');
var router = express.Router();
var models = require("../models");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"message ": "it's working"});
});

// www.abc.com/todos/getall
router.get('/getall', function(req,res,next){
    models.Student.findAll({})
    .then(function(stu){
      res.json(stu);
    }).error(function(error){
      res.json(error);
    })

});
//www.abc.com/todos/update
router.post('/update', function(req,res,next){

  models.Student.update({
  firstname: 'Vivek',
  lastname: 'shah'
}, {where: { id: 2 } })
.then(function(){
  console.log(arguments) // { '0': [ 0 ] }
});
});

router.post('/delete', function(req,res,next){
  models.Student.destroy({where: {id:1}});

});
// www.abc.com/todos/add
router.post('/add', function(req,res,next){
var newstudent = models.Student.build(req.body);

    newstudent.save()
    .then(function(anotherstu){
      res.json(anotherstu);
    }).catch(function(error){

      res.json(error);
    });

});
module.exports = router;
