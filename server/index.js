const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "shashi",
    connectionLimit: 5,
    database: "crud_database",
    debug: true
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {

    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/api/insert", (req, res) => {

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview
    console.log(movieName);
    const sqlInsert = "INSERT INTO movie_reviews (movie_name, movieReview) VALUES (?,?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});