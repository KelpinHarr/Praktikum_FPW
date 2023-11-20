const express = require('express');
const app = express();
const Joi = require('joi');
const cors = require('cors');
app.set("port", 3000);

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.listen(app.get("port"), function(){
    console.log(`Server started at http://localhost:${app.get("port")}`);
})

let user = [
    {
        email: "calvinharsono07@gmail.com",
        nama: "Calvin Harsono",
        password: "123"
    }
]

app.get('/', function(req, res){
    return res.status(200).json(user);
})

app.post('/register', function(req, res){
    const email = req.body.email;
    const nama = req.body.nama;
    const password = req.body.password;

    let isDup = false;
    for (let i = 0 ; i < user.length; i++){
        if (user[i].email == email){
            isDup = true;
        }
    }

    if (isDup){
        const result = {
            "message" : "Email sudah terdaftar"
        }
        res.status(400).json(result);
    }
    else {
        const newUser = {
            "email" : email,
            "nama" : nama,
            "password" : password
        }
        user.push(newUser);
        res.status(201).json(newUser);
    }  

})

app.post('/login', function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    for (let i = 0; i < user.length; i++){
        if (user[i].email != email){
            return res.status(400).json({"message" : "Email tidak terdaftar"});
        }
        else {
            if (user[i].password != password){
                return res.status(400).json({"message" : "Password salah"});
            }
            else {
                const result = {
                    "message" : "Login success"
                }
                res.status(200).json(result);
            }
        }
    }

})