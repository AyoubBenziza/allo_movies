const {connection} = require("../services/database.js");

// Function asynchrone
exports.getAll = async function(){
    // Requete SQL
    let sql = "SELECT * FROM movies m JOIN directors d ON d.id_director=m.director_movie";
    // Récupération du premier index (results) à attendre que ça retourne le résultat
    const [results,fields] = await connection.promise().query(sql);
    return results;
}

exports.getById = async function(id){
    let sql = `SELECT * FROM movies m JOIN directors d ON d.id_director=m.director_movie WHERE id_movie = ${id}`;
    const [results,fields] = await connection.promise().query(sql);
    return results;
}

exports.create = async function(object){
    let sql = `INSERT INTO movies SET ?`;
    const [results,fields] = await connection.promise().query(sql,object);
    return results;
}

exports.update = async function(id,object){
    let sql = `UPDATE movies SET ? WHERE id_movie = ?`;
    const [results,fields] = await connection.promise().query(sql,[object,id]);
    return results;
}

exports.delete = async function(id){
    let sql = `DELETE FROM movies WHERE id_movie = ${id}`;
    const [results,fields] = await connection.promise().query(sql);
    return results;
}