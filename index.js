import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/schemas/users';
import cors from 'cors';

import { createToken } from './src/resolvers/create';
import { verifyToken } from './src/resolvers/verify';

import schema from "./src/graphql";
import graphqlHTTP from "express-graphql"


const JsonParser = bodyParser.json();
const app = express();
const PORT = process.env.PORT || 6430

mongoose.connect("mongodb://emanuellop:Emanuel1@ds135421.mlab.com:35421/cintanegradb");

const db = mongoose.connection;


db.on('error',() => console.log('Failed to connect to mongoDB'))
    .once('open',()=> console.log('Connected to MongoDB', PORT));

    app.listen(PORT,() =>{
        console.log("Magic Happens in port: "+PORT)
    })

app.use((cors()));

app.get('/', (req,res) => {
    res.send("Hello World");
});


app.get('/userList', function(req,res){
    User.find({}).then(function(users){
        res.send(users);
    })
})

app.get('/hola', (req,res) => {
    res.send("Hello hola");
});

app.get('/addUser', (req,res) => {
    var user = new User({
        "name":"TESTO",
        "lastName":"Testing",
        "email": "test@test.com",
        "password": "123456",
        "phone": "66226622"
    });

    user.save((err)=> {
        if(err) throw err
        res.send('Usuario Creado'); 
    })
})

app.post('/register', JsonParser, (req,res) => {
    var user = new User(req.body);
    console.log(req.body);

    user.save((err)=>{
        if(err) throw err
        res.send('Usuario Registrado')

    })
})


app.use('/login', JsonParser, (req,res)=>{
    if(req.method === 'POST'){
        const token = createToken(req.body.email, req.body.password).then((token)=>{
            res.status(200).json({token});
        })
        .catch((err)=>{
            console.log(err)
            res.status(403).json({
                message: 'Login Failed INVALID CREDENTIALS'
            })
        })
    }

})

app.use('/verifyToken', JsonParser, (req,res)=> {
    if(req.method === 'POST'){
        try{
            const token = req.headers['authorization']
            verifyToken(token)
            .then(user => {
                console.log(user)
                res.status(200).json({user});
                console.log(user)
            })
            .catch(err=>{
                console.log(err)
            })
        } catch(e){
            console.log(e.message);
            res.status(401).json({
                //MOSTRAR MENSAJE SI EL TOKEN NO FUNCA
                message:e.message
            })
        }
    }
})
app.use ("/graphql", (req,res,next)=>{
    const token=req.headers["authorization"]
    try{
        req.user = verifyToken(token)
        next()
    } catch (er){
        res.status(401).json({
            message:e.message
        })
    }
})
app.use("/graphql", graphqlHTTP((req,res)=>({
    schema,
    graphiql:true,
    pretty:true,
    user: req.user
})))