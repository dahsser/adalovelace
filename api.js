const fs = require('fs');
module.exports = function(app){
    app.get("/api/users", function(req,res){
        fs.readFile("usuarios.json",'utf8', function(err,data){
            if(err){
                console.log("Error");
                return ;
            }
            res.statusCode = 200;
            let usuarios = JSON.parse(data);
            let respuesta = {};
            for(let user in usuarios){
                respuesta[user]={
                    "firstName":usuarios[user]["firstName"],
                    "lastName":usuarios[user]["lastName"],
                    "user":usuarios[user]["user"]
                }
            }
            res.json(respuesta);
        });
    });
    app.get("/api/denuncias", function(req,res){
        fs.readFile("denuncias.json","utf8", function(err,data){
            if(err){
                console.log(err);
                return ;
            }
            res.statusCode = 200;
            let denuncias = JSON.parse(data);
            res.json(denuncias);
        })
    });
};
