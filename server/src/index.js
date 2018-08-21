const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');
const posts = require('./routes/posts');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(posts);

mongoose.Promise = global.Promise;

mongoose.connect(config.dbURL, { useNewUrlParser: true });

mongoose.connection
  .once('open', () => {
    console.log('Mongoose - successful connect ...');
    app.listen(process.env.PORT || config.port, () => {
      console.log(`Server starting at port ${config.port}`);
    });
  })
  .on('error', e => console.log('@@@', e));

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: 'Hello World!',
      description: 'Hi there! How are you?',
    }],
  );
});
