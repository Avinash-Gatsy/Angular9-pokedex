var mongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const connectionStr = "mongodb+srv://<username>:<password>@mycluster-yjjo4.mongodb.net/test?retryWrites=true&w=majority";

//read json data
// const pokedexDataBuffer = fs.readFileSync('pokedex.json');
// const pokedexDataJson = pokedexDataBuffer.toString();
// let pokedexDataJsonCopy = JSON.parse(pokedexDataJson);
// console.log(pokedexDataJsonCopy.length);

mongoClient.connect(connectionStr, (err,client)=>{
    if(!err){
        console.log('successfully connected to db');
        let db = client.db("Pokedex");
        //inserting multiple collections
        /* db.collection('Pokemons', (err, collection)=>{
            collection.insertMany(pokedexDataJsonCopy, (err, res)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("Number of documents inserted: " + res.insertedCount);
                }
            });
        }); */

        //finding a document in collection
        // if we want all the documents in collection - pass empty {} as query in find()
        db.collection('Pokemons').find({id: 40}).toArray((err, res)=>{
           if(err) throw err;
           console.log(res);
           client.close();
        });
    }
});