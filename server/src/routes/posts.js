const express = require('express');
const Posts = require('../models/post-model');

const router = express.Router();

router.post('/posts', (req, res) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
  });
  post.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        succes: true,
        message: `Post with ID ${data._id} width successful`,
      });
    }
  });
});

router.get('/posts', (req, res) => {
  Posts.find({}, 'title description', (err, posts) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send({ posts });
    }
  }).sort({ _id: -1 });
});

router.get('/posts/:id', (req, res) => {
  Posts.findById(req.params.id, 'title description', (err, post) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(post);
    }
  });
});

router.put('/posts/:id', (req, res) => {
  Posts.findById(req.params.id, 'title descriptions', (err, post) => {
    if (err) {
      console.log(err);
    } else {
      if (req.body.title) {
        post.title = req.body.title;
      }
      if (req.body.description) {
        post.description = req.body.description;
      }
      post.save((e) => {
        if (e) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
});

router.delete('/posts/:id', (req, res) => {
  console.log(req, res);
  Posts.remove({ _id: req.params.id }, (e) => {
    if (e) {
      console.log('somsing going down');
      res.sendStatus(500);
    } else {
      console.log('all done!');
      res.sendStatus(200);
    }
  });
});

module.exports = router;
