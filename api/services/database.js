const mysql = require("mysql2");

console.log(process.env)
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PSWD);
console.log(process.env.DB_NAME);

//----------------------------PROPRIETES DE LA BASE DE DONNEES---------------------------------//
    // create the connection to database
    exports.connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PSWD,
        database: process.env.DB_NAME,
    });

// module.exports = init // Pour exporter la function init
// module.exports = {init} // Autre façon d'exporter des functions