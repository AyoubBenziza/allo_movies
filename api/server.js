const express = require("express");
const api = express();
const cors = require("cors");
const PORT = 8080;

// const db = require("./services/database.js");

// Nos chemins de librairies
const moviesRouter = require("./routers/movies.js");
const directorsRouter = require("./routers/directors.js");
const categoriesRouter = require("./routers/categories.js");

// Décodage des données json et url pour le body du site
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// Lien avec React
api.use(cors("*"));

// Nos chemins d'accès URL à nos librairies
api.use("/movies", moviesRouter);
api.use("/directors", directorsRouter);
api.use("/categories", categoriesRouter);

// Tableaux des noms de nos tables
// let tables =["movies","directors","categories","movies_categories"];

//-------------------------------------REQUETES SQL--------------------------------------------//
// simple query
// function allFromTable(table){
//     db.connection.query(
//         `SELECT * FROM ${table}`,
//         function(err, results) {
//             // console.log(fields); // fields contains extra meta data about results, if available
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(results); // results contains rows returned by server
//             }
//         }
//     );
// }

// function readFromTable(table,attribut,id){
//     db.connection.query(
//         `SELECT * FROM ${table} WHERE ${attribut}=${id}`,
//         function(err, results) {
//             // console.log(fields); // fields contains extra meta data about results, if available
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(results); // results contains rows returned by server
//             }
//         }
//     );
// }

// function createFromTable(){
//     db.connection.query(
//         'INSERT INTO movies VALUES (10,"Gladiator",145,2003,"Synopsis Gladiator",1)',
//         function(err, results) {
//             // console.log(fields); // fields contains extra meta data about results, if available
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(results); // results contains rows returned by server
//             }
//         }
//     );
// }

// function updateFromTable(){
//     db.connection.query(
//         'UPDATE movies SET synopsis_movie = "Synopsis Gladiators" WHERE movies.id_movie = 10',
//         function(err, results) {
//             // console.log(fields); // fields contains extra meta data about results, if available
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(results); // results contains rows returned by server
//             }
//         }
//     );
// }

// function deleteFromTable(){
//     db.connection.query(
//         'DELETE FROM movies WHERE id_movie = 10',
//         function(err, results) {
//             // console.log(fields); // fields contains extra meta data about results, if available
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(results); // results contains rows returned by server
//             }
//         }
//     );
// }

//-----------------------------ROUTES DE CRUD SUR LE NAVIGATEUR----------------------------//
api.get("/", (req, res) => {
  res.send("Bienvenue dans mon api");
});

// api.get('/createMovie', (req, res) => {
//     res.sendFile("/public/html/fetch.html", {root: __dirname});
// });

// api.get('/createDirector', (req, res) => {
//     res.sendFile("/public/html/createDirector.html", {root: __dirname});
// });

// api.get('/createCategory', (req, res) => {
//     res.sendFile("/public/html/createCategory.html", {root: __dirname});
// });

// api.get('/read/:tables',(req,res)=>{
//     if(tables.includes(req.params.tables)){
//         res.send("Lecture de la table envoyé dans la console");
//         allFromTable(req.params.tables);
//     }else{
//         res.send("Mauvais Url");
//     }
// });

// api.get('/read/:tables/:attribut/:id',(req,res)=>{
//     let param = req.params;
//     if(tables.includes(param.tables)){
//         res.send("Lecture de l'id envoyé dans la console");
//         res.json(readFromTable(param.tables,param.attribut,param.id));
//     }else{
//         res.send("Mauvais Url");
//     }
// });

// api.get('/create',(req,res)=>{
//     createFromTable();
//     res.send("Film ajouté à la base de données");
// });

// api.get('/update',(req,res)=>{
//     updateFromTable();
//     res.send("Mise à jour du film effectuée");
// });

// api.get('/delete',(req,res)=>{
//     deleteFromTable();
//     res.send("Suppression du film effectuée");
// });

// api.put('/update',(req,res)=>{
//     updateFromTable();
//     res.send("Mise à jour du film effectué par un PUT");
// });

// api.delete('/delete',(req,res)=>{
//     deleteFromTable();
//     res.send("Suppression du film effectuée par un DELETE");
// });

//-------------------------------LISTEN DU PORT-----------------------------//
api.listen(PORT, () => {
  console.log(`api listening on port ${PORT}`);
});

console.log(`Server launched on http://localhost:${PORT}/`);
