var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const fs = require('fs');
var app = express();

let pokedexDataJsonCopy;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const pokedexDataBuffer = fs.readFileSync('pokedex.json');
const pokedexDataJson = pokedexDataBuffer.toString();
pokedexDataJsonCopy = JSON.parse(pokedexDataJson);

app.listen(3000, (err)=>{
    if(!err){
        console.log('server started at port 3000');
    } else{
        console.log(err);
    }
});
app.get('/pokedex', (req, res)=>{
    res.json(pokedexDataJsonCopy);
    res.end();
});
app.delete('/pokemon/:id', (req, res)=>{
    let pokemonId = req.params.id;
    let index = pokedexDataJsonCopy.findIndex(i => i.id == pokemonId);
    if(index < 0){
        res.status(404).send('dude stop being drunk, check the index you sent');
        res.end();
    }
    console.log(pokedexDataJsonCopy.splice(index, 1));
    res.end(JSON.stringify(pokedexDataJsonCopy.splice(index, 1)));//we can send only a string in res.end();
});
app.post('/pokemon', (req, res)=>{
    console.dir(req.body);
    res.end('post operation successful');
});