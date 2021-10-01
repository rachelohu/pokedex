const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const pokemonList = require('./models/pokemon-list');
const methodOverride = require('method-Override');

const mongoose = require("mongoose");

const DATABASE_URL = "mongodb+srv://sei:helloworld@sei.wjl9d.mongodb.net/pokedex?retryWrites=true&w=majority"

const db=mongoose.connection;

// Connect to the mongo database:
mongoose.connect(DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Database Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.static("public"));
app.use(methodOverride("_method"));

// Index Route
app.get('/pokemon', (req,res) => {
    Pokemon.find({}, (error, foundPokemon) => {
        console.log( foundPokemon );
        res.render('index.ejs', {
            data: foundPokemon
        });
      });
});

// New Route
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {data: pokemonList});
});

app.get('/pokemon/new/:id', (req, res) => {
    const id = req.params.id;
    const foundPokemon = pokemonList.find( pokemon => pokemon.id === id );
    
    Pokemon.create( foundPokemon, (error, createdPokemon) => {
        res.redirect("/pokemon")
    } );
} );

// Destroy Route
app.delete('/pokemon/:id', (req, res) => {
    const id = req.params.id
    Data.findByIdAndRemove(id, (err, Pokemon)  => {
        res.redirect("/pokemon")
    })
});

// Update Route
// app.get('/pokemon/:id', (req, res) => {
//     const id = req.params.id
//     Data.findByIdAndUpdate
//     res.render('new.ejs', {})
// });

// Create Route
// app.put('/pokemon/:id', (req, res) => {
//

// Edit Route
app.get('/pokemon/:id/edit', (req, res) => {
     const id = req.params.id
     data.findById(id, (err, Pokemon) => {
    res.render('edit.ejs', {data: pokemonList[req.params.id]})
    })
});

// Show Route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {data: pokemonList[req.params.id]});
});

// Server Listener
app.listen(3000, () => {
    console.log('listening')
});