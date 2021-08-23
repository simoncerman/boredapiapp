//modules
const { text, json } = require('body-parser');
let express = require('express');
let fetch = require('node-fetch');


//simple stuff 
let port = 3000;
let app = express();
app.use(express.static('accessable'));
app.listen(port,()=>{
    console.log(`Server working on ${port}`)
})

app.get('/',(req,res)=>{
    res.sendFile('index.html',(err)=>{
        console.log(err);
    })
})
app.get('/data',async (req,res)=>{
    let response = await fetch('https://www.boredapi.com/api/activity');
    let json = await response.json();
    res.json(json);
    res.end();
})