const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const PostShema = new Shema({
  title: {
    type: string,
    unique: true,
  },
  description: {
    type: string,
  },
});

const PostModel = mongoose.model('schema', PostShema);
module.exports = PostModel;