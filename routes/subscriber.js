var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require("../models")

/* GET home page. */
router.get("/", function(req, res, next) {
  models.Subscribers.findAll().then(subscriber => res.json(subscriber));
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  let newSubscriber = new models.Subscribers();
  newSubscriber.FirstName = req.body.FirstName;
  newSubscriber.LastName = req.body.LastName;
  newSubscriber.Email = req.body.Email;
  newSubscriber.save().then(subscribers => res.json(subscribers));
});

module.exports = router;