// const data = "Testing";
// console.log(data);


// 2 cara 
const express = require("express");
// import express from "express";
const db = require("./connection");

const app = express();
const port = 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

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

app.get("/find/:id", (req,res) => {
    const data = req.query.id
    const sql = `SELECT * FROM produk WHERE id_produk = ${data}`;

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

app.post("/add-produk", (req,res) => {

    const { id_produk,produk, kategori, harga_per_kg } = req.body;
    const sql = `INSERT INTO produk (id_produk, produk, kategori, harga_per_kg) VALUES ('${id_produk}', '${produk}', '${kategori}', '${harga_per_kg}')`;

    db.query(sql, (error, result) => {
        if(error) throw error;
    });

    res.status(200).send("ok");
});

app.put("/update/:id", (req,res) => {
    // const idProduk = req.params.id
    const { id_produk,produk, kategori, harga_per_kg } = req.body;
    const sql = `UPDATE produk SET produk = "${produk}", kategori = "${kategori}", harga_per_kg = ${harga_per_kg} where id_produk = ${id_produk}`;

    db.query(sql, (error, result) => {
        if(error) throw error;
    });

    res.status(200).send("ok");
});

app.delete("/delete/:id", (req,res) => {
    const idProduk = req.params.id
    const sql =`DELETE FROM produk WHERE id_produk = ${idProduk}`

    db.query(sql, (error, result) => {
        if(error) throw error;
    })
});


app.listen(port,() => {
    console.log("App listening on Port 5000");
    // console.log(`App listening on Port 5000`);

});


