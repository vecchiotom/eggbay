var express = require('express');
var app = express();
var port = process.env.PORT || 80;
var exphbs = require('express-handlebars')
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

//web crawler
app.get('/wakemydyno.txt', function (req, res) {
    res.send("hi bot")
});

app.listen(port);