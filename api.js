const fs = require('fs');
module.exports = function(app){
    app.get("/api/users", function(req,res){
        fs.readFile("usuarios.json",'utf8', function(err,data){
            if(err){
                console.log("Error");
                return ;
            }
            res.statusCode = 200;
            res.json(JSON.parse(data));
        });
    });
};
