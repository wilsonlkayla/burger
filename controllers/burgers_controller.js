//Exporting the required dependencies
var express = require('express');
var router = express.Router();

//Importing the model to its database function
var burger = require('../models/burger');

//Create the routes 
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
        res.render('index', hbsObject);
    });
});

router.post('/burgers', function(req, res){
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(data){
        res.redirect('/');
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data){
        res.redirect('/');
    });
});

//Export routes for server.js
module.exports = router;