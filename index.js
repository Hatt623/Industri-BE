// const data = "Testing";
// console.log(data);


// 2 cara 
const express = require("express");
// import express from "express";
const db = require("./connection");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Selamat datang!");
});

app.get("/hello", (req, res) => {
    res.send("Hello World");
});

app.get("/find", (req,res) => {
    const kategori = req.query.kategori
    const sql = `SELECT * FROM produk WHERE kategori = ${kategori}`;

    db.query(sql , (error, result) => {
    res.json(result);
    });
});

app.get("/user", (req,res) => {
    res.json({
        name: "Abel",
        Pekerjaan: "Middleend Developer",
        umur: 2300,
        alamat: "Jakarta Utara",
        
    });
});

app.listen(port,() => {
    console.log("App listening on Port 5000");
    // console.log(`App listening on Port 5000`);

});


