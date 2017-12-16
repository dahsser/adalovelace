const express = require('express');
const fs = require('fs');
const mustache = require('mustache-express');
const app = express();

app.use("/static", express.static(__dirname + '/webapp/static'));
app.use("/vendor", express.static(__dirname + '/webapp/vendor'));
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/webapp/views');

app.get("/", function(req, res){
    res.render("index");
});

app.listen(8080);
