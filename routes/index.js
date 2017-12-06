var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require("express-jwt");

let Question = mongoose.model('Question');
let Comment = mongoose.model('Comment');

let auth = jwt({
    secret: 'DitIsHetProjectVanAnjana',
    userProperty: "payload"
  });

/* GET home page. */
router.get('/API/questions', function(req, res, next) {
    console.log("get /questions");
    let query = Question.find().populate("comments");
    query.exec(function(err, questions) {
        if (err) return next(err);
        res.json(questions);
      });
    
});

router.post('/API/questions', auth, function(req, res, next) {
    let question = new Question({
        name: req.body.name,
        description: req.body.description
    });
    question.save(function(err, post) {
        if (err) { return next(err); }
        res.json(question);
    });
});

router.param("question", function(req, res, next, id) {
    let query = Question.findById(id);
    query.exec(function(err, question) {
      if (err) {
        return next(err);
      }
      if (!question) {
        return next(new Error("not found " + id));
      }
      req.question = question;
      return next();
    });
  });
  
  router.param("comment", function(req, res, next, id) {
    let query = Comment.findById(id);
    query.exec(function(err, com) {
      if (err) {
        return next(err);
      }
      if (!com) {
        return next(new Error("comment was not found " + id));
      }
      req.comment = com;
      return next();
    });
  });
  
  router.get("/API/question/:question", function(req, res) {
    req.question.populate("comments", function(err, rec) {
      if (err) return next(err);
      res.json(rec);
    });
  });
  
  router.delete("/API/comment/:comment", function(req, res, next) {
    req.comment.remove(function(err) {
      if (err) {
        return next(err);
      }
      res.json(req.comment);
    });
  });
  
  router.delete("/API/question/:question", function(req, res, next) {
    Comment.remove({ _id: { $in: req.question.comments } }, function(err) {
      if (err) return next(err);
      req.question.remove(function(err) {
        if (err) {
          return next(err);
        }
        res.json(req.question);
      });
    });
  });
  
  router.post("/API/question/:question/comments", function(req, res, next) {
    let com = new Comment(req.body);
  
    com.save(function(err, comment) {
      if (err) return next(err);
        
      req.question.comments.push(comment)
      req.question.save(function(err, rec) {
        if (err) return next(err);
        res.json(comment);
      });
    });
  });
  
module.exports = router;
