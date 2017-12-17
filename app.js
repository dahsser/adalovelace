const express = require('express');
const fs = require('fs');
const app = express();
const api = require('./api');
const assert = require('assert');

// Deidago7Bluemix@
//username Clear DB : dlopez2

app.use("/static", express.static(__dirname + '/webapp/static'));
app.use("/vendor", express.static(__dirname + '/webapp/vendor'));
app.use("/resource", express.static(__dirname + '/webapp/resource'));

const hostname = '10.100.196.30';
const port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/webapp/views');

app.get("/inicio", function(req, res){
    if(err){
        console.log(err);
    }else{
        res.status(200);
        res.render("index");
    }
});
app.get("/registro", function(req, res){
    if(err){
        console.log(err);
    }else{
        res.status(200);
        res.render("registroDenuncia");
    }
});
let server = app.listen(port,() => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Example app listening at: http://%s:%s", host, port)
});
