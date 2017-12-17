module.exports = function(app, db){
    app.get("/api/users", function(req,res){
        res.statusCode = 200;
        console.log(db);
        db.collection('users', function(err,collection){
            let cursor = collection.find();
            cursor.toArray((err, items) => {res.json[items]});
        });
    });
};
