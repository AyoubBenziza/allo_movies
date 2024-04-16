const model = require("../models/director.js");

// Function asynchrone
exports.getAll = function (req, res) { // async à rajouter si await
    model.getAll()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
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
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
}

exports.delete = function(req,res){
    model.delete(req.params.id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
}
