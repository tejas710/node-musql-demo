var express = require('express');
var router = express.Router();
var models = require("../models");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({"message ": "it's working"});
});

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
