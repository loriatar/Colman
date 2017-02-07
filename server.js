/**
 * Created by lori on 05/02/2017.
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var glasses = require('./routes/glasses');

var port = 8080;

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',index);
app.use('/api',glasses);

app.get(/\.js |\.html|\.jpg|\.css|\.woff/, function (req, res) {
    res.sendFile(__dirname + req.url);
});

app.listen(port,function () {
    console.log('Server started on port ' + port);
});