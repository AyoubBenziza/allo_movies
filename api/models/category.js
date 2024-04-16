const {connection} = require("../services/database.js");

exports.getAll = async function(){
    let sql = "SELECT * FROM categories";
    const [results,fields] = await connection.promise().query(sql);
    return results;
}

exports.getById = async function(id){
    let sql = `SELECT * FROM categories WHERE id_category = ${id}`;
    const [results,fields] = await connection.promise().query(sql);
    return results;
}

exports.create = async function(object){
    let sql = `INSERT INTO categories SET ?`;
    const [results,fields] = await connection.promise().query(sql,object);
    return results;
}

exports.update = async function(id,object){
    let sql = `UPDATE categories SET ? WHERE id_category = ?`;
    const [results,fields] = await connection.promise().query(sql,[object,id]);
    return results;
}

exports.delete = async function(id){
    let sql = `DELETE FROM categories WHERE id_category = ${id}`;
    const [results,fields] = await connection.promise().query(sql);
    return results;
}