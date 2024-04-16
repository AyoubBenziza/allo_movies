const model = require("../models/movie.js");

// Function asynchrone
exports.getAll = function (req, res) { // async à rajouter si await
    // On essaie notre fonction
    // try{
    //     console.log(await model.getAll());
    // }catch(err){
    //     await console.log(err);
    // }

    model.getAll()
    // .then(res => console.log(res))
    // .catch(err => console.log(err));
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));

    // model.getAll(function(err,results){
    //     if(err){
    //         res.status(500).send(err);
    //     }else{
    //         res.json(results);
    //     }
    // });
};

exports.getOne = function(req,res){
    model.getById(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
}

exports.create = function(req,res){
    model.create(req.body)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
}

exports.update = function(req,res){
    model.update(req.params.id,req.body)
    .then(result => res.send(200).json(result))
    .catch(err => console.log(err));
}

exports.delete = function(req,res){
    model.delete(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
}
