const express = require('express');
const fs = require('fs');
const app = express();
app.use("/static", express.static(__dirname + '/webapp/static'));
app.use("/vendor", express.static(__dirname + '/webapp/vendor'));
app.use("/resource", express.static(__dirname + '/webapp/resource'));


const hostname = '127.0.0.1';
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/webapp/views');

app.get("/homepage", function(req, res){
    res.status(200);
    res.render("index");
});

let server = app.listen(8080, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Example app listening at http://[%s]:%s", host, port)
});
