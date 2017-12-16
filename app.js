const express = require('express');
const fs = require('fs');
const mustache = require('mustache-express');
const app = express();

app.use("/", express.static(__dirname + '/webapp/static'));
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/webapp/views');

app.get("/", function(req, res){
    res.render("index");
});
