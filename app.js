var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var exphbs = require('express-handlebars')
var http = require("http");

setInterval(function() {
    http.get("http://eggbay.herokuapp.com");
}, 300000); // ping every 5 minutes (300000)

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('work-in-progress');
});

app.listen(port);