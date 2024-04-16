const {connection} = require("../services/database.js");

exports.getAll = async function(){
    let sql = "SELECT * FROM directors";
    const [results,fields] = await connection.promise().query(sql);
    return results;
}

exports.getById = async function(id){
    let sql = `SELECT * FROM directors WHERE id_director = ${id}`;
    const [results,fields] = await connection.promise().query(sql);
    return results;
}

exports.create = async function(object){
    let sql = `INSERT INTO directors SET ?`;
    const [results,fields] = await connection.promise().query(sql,object);
    return results;
}

exports.update = async function(id,object){
    let sql = `UPDATE directors SET ? WHERE id_director = ?`;
    const [results,fields] = await connection.promise().query(sql,[object,id]);
    return results;
}

exports.delete = async function(id){
    let sql = `DELETE FROM directors WHERE id_director = ${id}`;
    const [results,fields] = await connection.promise().query(sql);
    return results;
}