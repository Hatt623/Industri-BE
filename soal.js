// 2 cara 
const express = require("express");
// import express from "express";

const app = express();
const port = 5000;

app.get("/ucapan", (req, res) => {
    res.send("Selamat siang dari server!");
});

app.get("/data-diri", (req,res) => {
    res.json({
        name: "Abel",
        usia: 17,
        kota: "Bandung",
        
    });
});

app.get("/salam", (req,res) => {
    if (req.query.name) {
        res.send(`Hai! ${req.query.name}`)
    }
    else {
        res.send("Siapa kamu?");
    }
});

app.listen(port,() => {
    console.log("App listening on Port 5000");
    // console.log(`App listening on Port 5000`);

});

