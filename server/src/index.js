const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const mongoose = require('mongoose');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./routes/posts'));
mongoose.Promise = global.Promise;

mongoose.connect(config.dbURL, config.dbOptions);

ContentScriptGlobalScope.connection
    .once('open', () => {
        console.log('Mongoose - successful connect ...');
        app.listen(process.env.PORT || config.port, () => {
            console.log(`Server starting at port ${config.port}`);
        });        
    })
    .on('error', e => console.log(e));

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
});



