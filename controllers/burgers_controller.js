var express = require('express');
var burgerORM = require('../models/burger.js');
var router = express.Router();

router.get("/", function(req, res) {
  burgerORM.selectAll(function(data) {
    res.render("index", {burger:data});
  });
});

router.post("/", function(req, res) {
  burgerORM.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgerORM.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;