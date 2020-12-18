const methods = require('./firebase/firebase-methods');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, (error, data)=>{
    if(error)
        console.log(error);
    else 
        console.log("connected");
})

app.post('/userData', (req, res)=> {
    methods._addUserData(req.body, (output)=>{
        res.send(output);
    });
});

app.get('/userData', (req, res)=> {
    methods._getUserData(req.body, (output)=>{
        res.send(output);
    });
});

app.delete('/userData',(req, res)=> {
    methods._deleteUserData(req.body, (output)=>{
        res.send(output);
    });
});

app.put('/userData', (req, res)=> {
    methods._updateUserData(req.body, (output)=> {
        res.send(output);
    });
});