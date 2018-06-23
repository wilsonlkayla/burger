// Require NPM Packages
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

//Serve static content for the app from the public directory
app.use(express.static(process.cwd() + './public'));

app.use(bodyParser.urlencoded({extended: false}));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import Routes & Create Access for the Server
var routes = require('./controllers/burgers_controller');

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

app.use('/', routes);

app.listen(port);