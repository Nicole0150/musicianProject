const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.get("/musicians", async (req, res) => {
    const musicians = await Musician.findAll({});
    res.json(musicians);
})

app.get("/musicians/:id", async (req, res) =>{
    const id = req.params.id;
    const musician = await Musician.findByPk(id);
    res.json(musician);
})

app.use(express.json());
app.use(express.urlencoded());

app.post("/musicians", async (req, res) =>{
    const newMusic = await Musician.create(req.body);
    res.json(newMusic);
})

app.put("/musicians/:id", async (req, res) =>{
    const route = req.params.id;
    const replace = await Musician.update(req.body, {where: {id: route}})
    res.json(replace);
})

app.delete("/musicians/:id", async(req, res) =>{
    const route = req.params.id;
    const del = await Musician.destroy({where: {id: route}});
    res.json(del);
})


//TODO: Create a GET /musicians route to return all musicians 







module.exports = app;