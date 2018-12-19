//dependencies
var express = require("express");
var router = express.Router();
//import orm


//// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    cat.all(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });