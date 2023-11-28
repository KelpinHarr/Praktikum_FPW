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
        result,
        "message" : "Player inserted"
    }
    res.status(201).json(msg);
})