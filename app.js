var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var exphbs = require('express-handlebars')
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port);