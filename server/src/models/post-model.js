const mongoose = require('mongoose');

const Shema = mongoose.Schema;

const PostShema = new Shema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
});

const PostModel = mongoose.model('schema', PostShema);
module.exports = PostModel;
