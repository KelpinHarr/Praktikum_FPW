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
        first_name: "Calvin",
        last_name: "Harsono",
        password: "123"
    }
]

let story = [
    {
        id: 1,
        title: 'FPW menyenangkan 🤡',
        thumb: 'https://marketplace.canva.com/EAE_nRWI6xI/1/0/1600w/canva-video-16%3A9-putih-minat-khusus-lucu-hewan-peliharaan-meme-xu7-FP1zI0c.jpg',
        by: "calvinharsono07@gmail.com"
    },
    {
        id: 2,
        title: 'Pusing praktikum',
        thumb: 'https://cdn-image.hipwee.com/wp-content/uploads/2017/01/hipwee-Kolase-1-750x422.jpg',
        by: 'calvinharsono07@gmail.com'
    }
]

let character = [
    {
        id: 1,
        storyid: 1,
        name: 'Pak Sandi',
        title: 'Main Character',
        age: 35,
        characteristic: "Baik dan Jujur",
        background: "ini background pak sandi"
    },
    {
        id: 2,
        storyid: 1,
        name: 'Bu Sandi',
        title: 'Main Character',
        age: 31,
        characteristic: "Jahat",
        background: "ini background bu sandi"
    },
]


app.get('/', function(req, res){
    return res.status(200).json(user);
})

app.get('/user/:email', function(req, res){
    const email = req.params.email;
    let temp = []
    user.map((item) => {
        if (item.email == email){
            temp.push(item)
        }
    })
    // const result = {
    //     "First name" : temp[0].first_name
    // }
    if (temp.length == 0){
        return res.status(404).json({"message" : "Not found"})
    }
    else {
        res.status(200).json(temp);
    }
})

app.post('/register', function(req, res){
    const email = req.body.email;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
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
        return res.status(200).json(result);
    }
    else {
        const newUser = {
            "email" : email,
            "first_name" : firstName,
            "last_name" : lastName,
            "password" : password
        }
        user.push(newUser);
        return res.status(200).json(newUser);
    }  
})

app.post('/login', function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    let emailFound = false;

    for (let i = 0; i < user.length; i++){
        if (user[i].email == email){
            emailFound = true
            if (user[i].password != password){
                return res.status(200).json({"message" : "Password salah"});
            }
            else {
                const result = {
                    "message" : "Login success"
                }
                return res.status(200).json(result);
            }
        }
    }

    if (!emailFound){
        return res.status(404).json({"message" : "Email tidak terdaftar"})
    }
})

app.get('/stories', function(req, res){
    return res.status(200).json(story);
})

app.put('/user/:email', function(req, res){
    const email = req.params.email
    const firstName= req.body.first_name
    const lastName = req.body.last_name
    const password = req.body.password

    const findUser = user.find(u => u.email == email);

    if (findUser){
        findUser.first_name = firstName || findUser.first_name;
        findUser.last_name = lastName || findUser.last_name;
        findUser.password = password || findUser.password

        const result = {
            "First name" : findUser.first_name,
            "Last name" : findUser.last_name,
            "Password" : findUser.password
        }
        res.status(200).json(result);
    }
    else {
        res.status(404).json({"message" : "User not found!"})
    }
})

app.get('/stories/:story_id/overview', function(req, res){
    const storyId = req.params.story_id;
    // const title = req.body.title;
    // const thumb = req.body.thumb;

    const findStory = story.find(s => s.id == storyId);

    if (findStory){
        // findStory.title = title || findStory.title;
        // findStory.thumb = thumb || findStory.thumb;

        // const result = {
        //     "Title" : findStory.title,
        //     "Thumbnail" : findStory.thumb
        // }
        res.status(200).json(findStory);
    }
    else {
        res.status(404).json({"message" : "Story not found"})
    }
})

app.put('/stories/:story_id/overview', function(req, res){
    const storyId = req.params.story_id;
    const title = req.body.title;
    const thumb = req.body.thumb;

    const findStory = story.find(s => s.id == storyId);
    if (findStory){
        findStory.title = title || findStory.title;
        findStory.thumb = thumb || findStory.thumb;

        const result = {
            "Title" : findStory.title,
            "Thumbnail" : findStory.thumb
        }
        res.status(200).json(result);
    }
    else {
        res.status(404).json({"message" : "Story not found"})
    }
})

app.delete('/stories/:story_id/overview', function(req, res){
    const storyId = req.params.story_id;
    
    const storyIdx = story.findIndex(story => story.id == storyId);

    if (storyIdx !== -1){
        story.splice(storyIdx, 1);
        res.status(200).json({"message" : "Story deleted"})
    }
    else {
        res.status(404).json({"message" : "Story not found"})
    }
})


app.get('/registerstory/:email', function(req, res){
    const email = req.params.email;
    const newStory = {
        "id" : story.length + 1,
        "title" : "Untitled#" + (story.length + 1),
        "thumb" : "https://static.thenounproject.com/png/2965948-200.png",
        "by": email
    }
    story.push(newStory);
    return res.status(200).json(newStory);
})

app.get('/characters', function(req, res){
    return res.status(200).json(character);
})

app.get('/characters/:storyid', function(req, res){
    let temp = []
    character.map((item) => {
        if (item.storyid == req.params.storyid){
            temp.push(item)
        }
    })
    return res.status(200).json(temp);
})

app.post('/registercharacter', function(req, res){
    const storyid = req.body.storyid;
    const name = req.body.name;
    const title = req.body.title;
    const age = req.body.age;
    const characteristic = req.body.characteristic;
    const background = req.body.background;

    const newCharacter = {
        "id" : character.length + 1,
        "storyid" : storyid,
        "name" : name,
        "title" : title,
        "age" : age,
        "characteristic" : characteristic,
        "background" : background,
    }
    character.push(newCharacter);
    return res.status(200).json(newCharacter);
})

app.post('/updatecharacter', function(req, res){
    const storyid = req.body.storyid;
    const id = req.body.id;
    const name = req.body.name;
    const title = req.body.title;
    const age = req.body.age;
    const characteristic = req.body.characteristic;
    const background = req.body.background;

    const newCharacter = {
        "id" : id,
        "storyid" : storyid,
        "name" : name,
        "title" : title,
        "age" : age,
        "characteristic" : characteristic,
        "background" : background,
    }
    for(var i = 0; i < character.length; i++) {
        if(character[i].id == id) {
            character[i] = newCharacter; 
        }
    }

    return res.status(200).json(newCharacter);
})
