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


module.exports = router;
