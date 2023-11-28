const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3000;
const Player = require('./Players')

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port, async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/db_football')
        console.log('Database connected')
    }
    catch(e){
        console.log('Error database connection \n', e)
    }
    console.log(`listening on port ${port}!`)
})

//Player
app.get('/api/players', async function(req, res){
    const result = await Player.find()

    if (!result) {
        const msg = {
            "message" : "Error"
        }
        res.status(400).json(msg);
    }
    else {
        res.status(200).json(result);
    }
})

app.post('/api/players', async function(req, res){
    const { name, age, position, nationality, number } = req.body;

    const newPlayer = new Player({
        name, age, position, nationality, number
    })

    const result = await newPlayer.save();

    const msg = {
        "message" : "Player added!",
        result
    }
    res.status(201).json(msg);
})

app.put('/api/players/:nama', async function(req, res){
    const nama = req.params.nama;
    const { name, age, position, nationality, number } = req.body;

    try{
        const cariPlayer = await Player.find({
            name: nama
        })

        if (cariPlayer.length == 0){
            const result = {
                "message" : "Player not found!"
            }
            res.status(404).json(result);
        }
        else {
            const updatePlayer = await Player.updateOne({
                name: nama
            }, {
                $set: {
                    name: name,
                    age: age,
                    position: position,
                    nationality: nationality,
                    number: number
                }
            })
            res.status(200).json(updatePlayer);
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

app.delete('/api/players/:nama', async function(req, res){
    const nama = req.params.nama;

    try{
        const cariPlayer = await Player.find({
            name: nama
        })

        if (cariPlayer.length == 0){
            const result = {
                "message" : "Player not found!"
            }
            res.status(404).json(result);
        }
        else {
            const deletePlayer = await Player.deleteOne({
                name: nama
            })
            res.status(200).json({message: "Player deleted!"});
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})