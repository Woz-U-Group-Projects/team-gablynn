var express = require("express");
var router = express.Router();
const sqlite = require("sqlite3").verbose();
var models = require("../models")
var multer = require("multer");
var mime = require("mime");
var crypto = require("crypto");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      cb(
        null,
        raw.toString("hex") + Date.now() + "." + mime.extension(file.mimetype)
      );
    });
  }
});

var upload = multer({ storage: storage });

router.get("/", function(req, res, next) {
  models.Post.findAll()
    .then(posts => res.send(posts))
});

router.post("/", upload.single("image"), function(req, res, next) {
  let submitPost = new models.Post();
   console.log(req.body);
   submitPost.description = req.body.description;
   submitPost.title = req.body.title;
   submitPost.topic = req.body.topic;
   submitPost.image =
    req.protocol + "://" + req.get("host") + "/public/" + req.file.filename;

  submitPost
    .save()
    .then(post => res.json(post))
    .catch(error => res.status(400).send(error));
});

router.delete('/Post/:id/delete', (req, res) => {
  let postid = parseInt(req.params.id);
  models.Post.update(
    {
      Deleted: 'true'
    },
    {
      where: {
        PostID: postid
      }
    }
  )
  .then(title => {
    res.redirect('/post');
  });
});

module.exports = router;
